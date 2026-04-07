# Workflow: LT Full Pipeline

## Descrição
Pipeline completo para geração de novos criativos do zero. Cobre análise de campeões, estratégia, copy, produção no Lovart, revisão e entrega final.

## Trigger
- Usuário diz "faça novos criativos" ou "gera criativos"
- Comando `*generate-creatives [N]` onde N é a quantidade desejada (padrão: 10)

## Fases

### FASE 1 - Análise (condicional)
**Executar quando:** é o primeiro lote da sessão OU há novos campeões nas pastas validadas
**Pular quando:** padrões já foram extraídos e `data/pattern-summary.md` existe e está atualizado

- Task 01: 01-analyze-champions
- Task 02: 02-extract-patterns
- Saída: `data/pattern-summary.md`, `data/champion-catalog.md`

### FASE 2 - Estratégia
**Sempre executar**

- Task 03: 03-create-briefing
- Saída: briefings individuais + batch-plan + variation-map
- Gate: verificar diversidade do lote antes de avançar (anti-agrupamento)

### FASE 3 - Copy
**Sempre executar**

- Task 04: 04-write-copy
- Loop: iterar até score >= 10/12 em TODOS os criativos (máx 2 iterações)
- Gate: nenhum criativo avança com score < 10/12

### FASE 4 - Produção Lovart
**Sempre executar**

- Task 05: 05-create-lovart-prompts
- Task 06: 06-validate-prompts
- Task 07: 07-generate-images
- Gate: verificar disponibilidade do Lovart antes de iniciar Task 07
  - Se indisponível: pausar e notificar usuário com alternativas

### FASE 5 - Revisão
**Sempre executar**

- Task 08: 08-analyze-images
- Task 09: 09-safe-zone-check
- Loop: regenerar imagens reprovadas (máx 2 tentativas por criativo)
- Gate: nenhuma imagem com violação de safe zone avança

### FASE 6 - Formatos e Entrega
**Sempre executar**

- Task 10: 10-crop-to-feed
- Task 11: 11-package-delivery

## Output Final
- 10 criativos em 2 formatos: Story 1080x1920 + Feed 1350x1080
- Relatório com padrões usados e variações aplicadas
- Plano de campanha Meta Ads (protocolo Micha CBO)
- Kill rule documentada: R$33,50 sem conversão = pausar criativo
- Caminho da pasta entregue ao usuário

## Tempo Estimado
- Com Fase 1 (análise): todas as 6 fases
- Sem Fase 1 (padrões já existem): fases 2 a 6 apenas
- Se Lovart indisponível: pipeline pausa na Fase 4, aguardar disponibilidade

## Fallback por Fase

| Fase | Falha Possível | Ação |
|------|---------------|------|
| 1 | Pastas não encontradas | Pedir caminho correto ao usuário |
| 3 | Copy não atinge 10/12 após 2 iterações | Entregar com flag de ressalva |
| 4 | Lovart indisponível | Pausar, notificar, aguardar instrução |
| 5 | Imagem não aprovada após 2 tentativas | Substituir por variação do campeão com --reference |
| 6 | Score < 75 em algum criativo | Incluir na entrega com aviso ao Creative Director |
