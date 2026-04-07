# Task: 01 - Analisar Campeões

## Agentes Envolvidos
- Lead: @champion-researcher (Scout)

## Objetivo
Catalogar e analisar todos os criativos campeões das pastas validadas, gerando um inventário completo com classificação por formato e tema.

## Inputs
- Pasta `C:/Users/Pichau/Desktop/Validados/`
- Pasta `C:/Users/Pichau/Desktop/Criativos Validados/` (incluindo subpasta `campea/`)

## Processo
1. Scout varre `C:/Users/Pichau/Desktop/Validados/` e lista todos os arquivos de imagem
2. Scout varre `C:/Users/Pichau/Desktop/Criativos Validados/` incluindo subpasta `campea/`
3. Para cada criativo: registrar nome, formato (story/feed), tamanho aproximado
4. Identificar quais são Story (altura maior que largura) e quais são Feed (largura maior que altura)
5. Criar `data/champion-catalog.md` com lista completa e classificação
6. Reportar: total de campeões, distribuição story/feed, temas identificados

## Outputs
- `data/champion-catalog.md` com inventário completo

## Critério de Conclusão
Quando todos os arquivos das duas pastas estiverem catalogados com nome, formato e classificação correta
