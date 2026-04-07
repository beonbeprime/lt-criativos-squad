# Task: 03 - Criar Briefings

## Agentes Envolvidos
- Lead: @briefing-creator (Brief)
- Suporte: @lt-strategist (Strategy), @batch-planner (Plan), @variation-architect (Vary)

## Objetivo
Criar briefings detalhados para cada criativo do lote, com estratégia, nomenclatura e diversidade garantida.

## Inputs
- `data/pattern-summary.md` (produzido na Task 02)
- `data/champion-catalog.md`
- Parâmetros do lote: quantidade (padrão 10), data, objetivo da rodada

## Processo
1. Strategy define estratégia da rodada baseada nos padrões extraídos - quais ângulos testar
2. Plan define quantidade e nomenclatura do lote (padrão: 10 criativos, ARQ-{data}-T001 a T010)
3. Vary distribui variações da matriz 2+8 pelo lote: 2 Próximas + V1 a V8
4. Brief cria briefing individual para cada criativo com: tema, background, copy, paleta, referência de campeão
5. Anti-agrupamento: verificar que não há mais de 2 criativos do mesmo tema de background no lote
6. Hook cria hooks específicos para variações que precisam de gancho forte (V7, V8)

## Outputs
- `data/briefings/` com 10 arquivos .md individuais (ARQ-{data}-T001.md a T010.md)
- `data/batch-plan.md` - plano geral do lote com estratégia
- `data/variation-map.md` - mapa de variações aplicadas

## Critério de Conclusão
Quando todos os briefings estiverem criados e a diversidade do lote estiver aprovada pelo agente anti-agrupamento
