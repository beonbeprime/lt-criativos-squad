# Task: 05 - Criar Prompts Lovart

## Agentes Envolvidos
- Lead: @lovart-prompt-engineer (Prompt)
- Suporte: @vertical-format-agent (Vert)

## Objetivo
Criar prompts em inglês para geração de imagens no Lovart, otimizados para formato vertical e safe zone no terço inferior.

## Inputs
- `data/briefings/` com briefings individuais (com copy_final da Task 04)
- `data/background-library.md` com 7 temas aprovados
- `data/champion-catalog.md` para referências de campeões

## Processo
1. Prompt lê briefing de cada criativo individualmente
2. Vert verifica regras de formato vertical antes de criar cada prompt:
   - Formato obrigatório: 9:16 vertical
   - Terço inferior completamente limpo (Y > 1280 de 1920px)
   - Elemento central para texto no terço superior
3. Prompt cria prompt em inglês para cada criativo seguindo estrutura:
   - SCENE: ambiente, iluminação, profundidade
   - CENTRAL ELEMENT: placa, painel ou espaço limpo no centro-superior para overlay de texto
   - Bottom third completely clean - no text, no logos, no information
   - Color palette em hex
   - Estilo cinematográfico 4K, iluminação profissional
4. Para criativos com referência de campeão: adicionar flag --reference com caminho do arquivo
5. Compilar todos os prompts em `data/prompts/batch-prompts.md`
6. Salvar também arquivos individuais em `data/prompts/{id}-prompt.md`

## Estrutura do Prompt (modelo)
```
[SCENE] {ambiente e iluminação}
[CENTRAL ELEMENT] {placa/espaço para texto no centro-superior, entre Y=200 e Y=1200}
[SAFE ZONE] Bottom third completely clean - no visual elements, no text, only clean background
[FORMAT] Vertical 9:16, 1080x1920px
[PALETTE] {cor1 hex}, {cor2 hex}, {acento hex}
[STYLE] Cinematic 4K, professional lighting, {estilo específico}
```

## Outputs
- `data/prompts/batch-prompts.md` com todos os 10 prompts compilados
- `data/prompts/{id}-prompt.md` para cada criativo individualmente

## Critério de Conclusão
Quando todos os 10 prompts estiverem criados e verificados pelo Vert para safe zone e formato vertical
