# Task: 10 - Cortar para Feed

## Agentes Envolvidos
- Lead: @intelligent-crop-agent (Crop)
- Suporte: @safe-area-detector (Area)

## Objetivo
Criar versão Feed (1350x1080) de cada criativo Story (1080x1920) usando corte inteligente centrado nos elementos principais.

## Inputs
- Imagens SAFE de `output/lt-criativos/{data}/raw/`
- `data/safe-zone-report.md` - lista de imagens aprovadas
- `data/briefings/` - para saber se há pessoa e onde está o texto principal

## Processo
1. Para cada imagem Story aprovada:
   a. Area detecta posição do texto principal (Y do topo e base do bloco de texto)
   b. Area detecta posição da cabeça se há pessoa no criativo (Y do topo da cabeça)
   c. Area calcula ponto de foco: média ponderada entre texto (peso 0.6) e cabeça (peso 0.4)
   d. Crop executa corte de 1080px de altura centrado no ponto de foco
   e. Crop faz resize do crop para 1350x1080 usando LANCZOS
2. Verificar resultado: texto e cabeça dentro dos limites visíveis
3. Se resultado ruim: ajustar foco manualmente e repetir
4. Salvar como `ARQ-{data}-T{NNN}_feed_1350x1080.png`
5. Registrar parâmetros de crop em `data/crop-log.md`

## Script Base (Python/PIL)
```python
def smart_crop_to_feed(story_path, focus_y):
    img = Image.open(story_path)  # 1080x1920
    top = max(0, focus_y - 540)
    bottom = min(1920, top + 1080)
    cropped = img.crop((0, top, 1080, bottom))
    return cropped.resize((1350, 1080), Image.LANCZOS)
```

## Outputs
- Arquivos `ARQ-{data}-T{NNN}_feed_1350x1080.png` em `output/lt-criativos/{data}/feed/`
- `data/crop-log.md` com parâmetros usados em cada corte

## Critério de Conclusão
Quando todos os 10 criativos tiverem versão feed criada, verificada visualmente e salva na pasta feed
