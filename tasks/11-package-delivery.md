# Task: 11 - Empacotar e Entregar

## Agentes Envolvidos
- Lead: @delivery-agent (Deliver)
- Suporte: @format-packager (Pack), @batch-organizer (Batch), @lt-quality-scorer (Score), @compliance-checker (Comply), @creative-director (Director)

## Objetivo
Empacotar, verificar e entregar o lote completo ao usuário com organização de pastas, relatório e plano de campanha.

## Inputs
- Imagens Story em `output/lt-criativos/{data}/raw/`
- Imagens Feed em `output/lt-criativos/{data}/feed/`
- `data/briefings/` com briefings individuais
- `checklists/delivery-checklist.md`

## Processo
1. Score calcula score final de cada criativo (threshold: >= 75 para entrega)
2. Comply verifica conformidade final de todos os criativos contra o checklist de entrega
3. Director faz aprovação criativa: avalia impacto visual e coerência entre copy e visual
4. Pack organiza estrutura de pastas com pares Story + Feed por criativo
5. Batch prepara nomenclatura e plano de campanha para Meta Ads (protocolo Micha CBO)
6. Deliver gera `lote-summary.md` e apresenta relatório ao usuário com caminho da pasta

## Estrutura de Entrega
```
output/lt-criativos/{data}/
  lote-{NNN}/
    ARQ-{data}-T001/
      story_1080x1920.png
      feed_1350x1080.png
      briefing.md
    ARQ-{data}-T002/
      story_1080x1920.png
      feed_1350x1080.png
      briefing.md
    ...
    lote-summary.md
    meta-ads-plan.md
```

## Outputs
- Pasta organizada com estrutura completa
- `lote-summary.md` com índice do lote, variações usadas e score geral
- `meta-ads-plan.md` com protocolo Micha CBO e kill rule documentada
- Relatório de entrega ao usuário com caminho da pasta

## Critério de Conclusão
Quando o usuário receber confirmação com caminho da pasta, lote-summary e meta-ads-plan disponíveis
