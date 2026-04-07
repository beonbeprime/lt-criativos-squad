# Task: 09 - Verificar Safe Zone

## Agentes Envolvidos
- Lead: @safe-zone-auditor (Safe)

## Objetivo
Garantir que o terço inferior de todas as imagens aprovadas está completamente limpo para overlay de texto.

## Inputs
- Imagens aprovadas de `output/lt-criativos/{data}/raw/`
- `data/image-analysis-report.md` - lista de imagens aprovadas pelo Eye

## Regra Absoluta
Zona proibida: Y > 1280 de 1920px.
Nenhum texto, logo ou elemento informativo pode existir abaixo desse limite.
Elementos puramente decorativos (textura de fundo, gradiente sutil) são aceitos.

## Processo
1. Safe recebe lista de imagens aprovadas pelo Eye
2. Para cada imagem, verificar o terço inferior (últimos 640px verticais, Y=1280 a Y=1920):
   a. Nenhum texto presente
   b. Nenhum logo ou marca
   c. Nenhum elemento gráfico informativo (ícones, setas, bordas decorativas com info)
   d. Nenhuma face ou parte do corpo da pessoa nessa zona
3. Elementos aceitos no terço inferior: gradiente, textura de fundo, bokeh, continuidade de cor
4. Imagens com violação: reprovar e encaminhar para Iter (Task 08) para regeneração
5. Imagens aprovadas: marcar como "SAFE - pronto para corte de feed"
6. Registrar resultado em `data/safe-zone-report.md`

## Outputs
- `data/safe-zone-report.md` com status SAFE ou VIOLAÇÃO para cada imagem
- Lista final de imagens aprovadas para a Task 10

## Critério de Conclusão
Quando todas as imagens do lote tiverem safe zone validada e estiverem marcadas como SAFE
