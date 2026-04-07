# Task 12 - Estratégia de Mensagem

## Objetivo

Definir a mensagem central de cada criativo antes de qualquer trabalho visual.
A mensagem estratégica é o alicerce. Sem ela, o visual é decoração sem direção.

---

## Camada no pipeline

Posição: Camada 2 (executa após briefing da Task 03, antes da direção visual da Task 13)

---

## Agentes ativados

| Agente | Papel |
|--------|-------|
| `lt-message-strategist` | Coordena a definição da mensagem central |
| `lt-audience-mapper` | Mapeia o nível de consciência e dor do público |
| `lt-hook-engineer` | Engenharia reversa do gancho a partir da dor mapeada |
| `lt-promise-crafter` | Transforma a dor em promessa de transformação |

---

## Inputs necessários

Recebidos da Task 03 (briefing):
- Produto e nicho
- Público-alvo e dor principal
- Promessa do produto
- Preço e forma de pagamento
- Objetivo do criativo (CTR, conversão direta, build awareness)

Consultados da pasta `_memory/`:
- `niche-learnings.md` - filtrado pelo nicho atual
- `copy-preferences.md` - padrões de copy aprovados
- `prohibitions.md` - elementos proibidos

---

## Processo passo a passo

### Passo 1: Mapeamento do nível de consciência

O `lt-audience-mapper` classifica o público em 5 níveis:
- Nível 1: Sem consciência (não sabe que tem o problema)
- Nível 2: Consciente do problema (sabe do problema, não da solução)
- Nível 3: Consciente da solução (sabe que existe solução, não conhece o produto)
- Nível 4: Consciente do produto (conhece, ainda não comprou)
- Nível 5: Mais consciente (pronto para comprar, precisa de oferta)

Para campanhas de topo de funil (cold traffic): focar nos níveis 2 e 3.
Para remarketing: focar nos níveis 4 e 5.

### Passo 2: Extração da dor raiz

O `lt-audience-mapper` identifica:
- Dor superficial (o que o público diz que quer)
- Dor intermediária (o que realmente está incomodando)
- Dor raiz (o que mantém o problema existindo)

A mensagem deve falar com a dor raiz, não a superficial.

### Passo 3: Construção da promessa de transformação

O `lt-promise-crafter` cria a promessa seguindo a estrutura:
- Estado atual (a realidade dolorosa)
- Mecanismo único (o que o produto faz de diferente)
- Estado desejado (a transformação prometida)
- Prova (número, tempo ou credencial que torna a promessa crível)

### Passo 4: Engenharia do gancho

O `lt-hook-engineer` gera 5 variações de gancho para a headline:
- Variação curiosidade (abre um loop mental)
- Variação urgência (cria pressão de tempo ou escassez)
- Variação identificação (o público vê a si mesmo)
- Variação contraintuitiva (quebra a crença limitante mais comum)
- Variação direta (promessa sem rodeios)

---

## Outputs esperados

Documento com:
1. Nível de consciência definido
2. Dor raiz identificada
3. Promessa de transformação (máximo 2 frases)
4. 5 variações de headline (uma por tipo de gancho)
5. 2 variações de subheadline
6. 1 CTA principal + 1 CTA alternativo

---

## Critérios de aprovação

- A promessa fala da transformação do público, não de características do produto
- Pelo menos 1 elemento concreto (número, tempo, resultado mensurável)
- Nenhuma palavra proibida da lista em `_memory/prohibitions.md`
- Sem travessão em nenhuma variação de copy
- Headline mais longa: máximo 10 palavras
