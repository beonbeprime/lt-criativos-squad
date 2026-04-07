# Task: 04 - Escrever Copy

## Agentes Envolvidos
- Lead: @lt-copywriter (Pen)
- Suporte: @headline-specialist (Head), @cta-specialist (Call), @copy-validator (Check), @copy-killer-engine (Kill)

## Objetivo
Escrever, validar e elevar toda a copy do lote com score mínimo de 10/12 em todos os criativos.

## Inputs
- `data/briefings/` com briefings individuais (produzidos na Task 03)
- `data/copy-patterns.md` com padrões extraídos dos campeões
- `checklists/copy-checklist.md`

## Processo
1. Pen escreve copy completa para cada criativo baseado no briefing individual
2. Head valida headlines: H1 "Sua mentoria pronta" (máx 32 chars), H2 complementar (máx 30 chars)
3. Call cria CTAs com preço visível (máx 20 chars) - ex: "Começar por R$67"
4. Check aplica checklist de 12 pontos - score mínimo 10/12 para aprovação
5. Kill aplica Copy Killer nas variações de maior impacto: 2 Próximas + V8 VIAGEM LOUCA
6. Copy aprovada é integrada no briefing de cada criativo como campo "copy_final"

## Outputs
- Copy finalizada e validada integrada em cada `data/briefings/{id}.md`
- Score de copy registrado em cada briefing

## Critério de Conclusão
Quando todos os 10 criativos tiverem copy com score >= 10/12 no checklist
