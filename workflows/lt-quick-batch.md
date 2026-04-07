# Workflow: LT Quick Batch

## Descrição
Pipeline rápido para quando os padrões já foram extraídos e o objetivo é escalar os campeões existentes com variações mínimas.

## Quando Usar
- `data/champion-catalog.md` já existe (padrões foram extraídos anteriormente)
- Usuário quer mais variações dos campeões que já funcionam
- Objetivo é escalar o que já converte, não testar novos ângulos
- Tempo reduzido é prioridade

## Quando NAO Usar
- Primeira rodada do squad (usar lt-full-pipeline)
- Usuário quer testar novos ângulos ou backgrounds
- Há novos campeões para analisar

## Trigger
- Usuário diz "mais variações dos campeões" ou "escala os campeões"
- Usuário diz "lote rápido" ou "quick batch"
- Padrões existem E objetivo é escalar

## Passos

### Passo 1 - Plano Rápido
- Plan define lote rápido: 2 Próximas + V1 + V2 de cada campeão principal
- Quantidade típica: 6 a 8 criativos
- Brief cria briefings baseados diretamente nos campeões (referência direta, mínima variação)

### Passo 2 - Copy Mínima
- Pen escreve copy com variação mínima em relação ao campeão de referência
- Kill aplica Copy Killer APENAS nas 2 Próximas (não em todas as variações)
- Check valida score - mínimo 10/12 obrigatório mesmo no modo rápido

### Passo 3 - Prompts com Referência
- Prompt cria prompts com --reference OBRIGATÓRIO para todos os criativos
- Vert verifica safe zone e formato
- Valid aprova antes de gerar

### Passo 4 - Geração e Revisão
- Gerar via Lovart (Task 07)
- Eye analisa imagens (Task 08)
- Safe verifica safe zone (Task 09)

### Passo 5 - Formatos e Entrega
- Crop gera versão feed (Task 10)
- Deliver empacota e entrega (Task 11)

## Output
- 6 a 8 criativos em 2 formatos cada
- Foco: escalar o que já funciona
- Copy fiel ao campeão com variação mínima
- --reference em todos os prompts garante consistência visual

## Diferenças em Relação ao Full Pipeline

| Aspecto | Full Pipeline | Quick Batch |
|---------|--------------|-------------|
| Análise de campeões | Sempre | Nunca (usa existentes) |
| Quantidade de criativos | 10 | 6 a 8 |
| Variações | Matriz 2+8 completa | Apenas Próximas + V1 + V2 |
| V8 VIAGEM LOUCA | Obrigatória | Ausente |
| Copy Killer | 2 Próximas + V8 | Apenas 2 Próximas |
| --reference no Lovart | Quando disponível | Obrigatório em todos |
| Tempo estimado | Completo | Aprox. 50% do Full |

## Regra de Ouro
Quick Batch serve para ESCALAR. Não serve para TESTAR.
Se o objetivo for testar novo ângulo, nova cor ou novo tema, usar o Full Pipeline.
