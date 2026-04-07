# Task 15 - Ranking e Seleção Final

## Objetivo

Avaliar todos os criativos gerados internamente, rankear pelos 9 critérios, aplicar regras de diversidade e selecionar os N melhores para entrega ao usuário.

---

## Camada no pipeline

Posição: Camada 7 (executa após geração 3x da Task 14, antes do empacotamento da Task 11)

---

## Agentes ativados

| Agente | Papel |
|--------|-------|
| `lt-quality-judge` | Aplica os 9 critérios e calcula a nota composta de cada criativo |
| `lt-diversity-checker` | Garante que o conjunto final entregue tem diversidade |
| `lt-final-curator` | Seleciona os N melhores respeitando as regras de diversidade |
| `lt-delivery-reporter` | Gera o relatório final de entrega |

---

## Os 9 critérios de avaliação

### Fórmula da nota composta

```
Nota = (C1 * 0.20) + (C2 * 0.18) + (C3 * 0.15) + (C4 * 0.12) + (C5 * 0.10) +
       (C6 * 0.10) + (C7 * 0.08) + (C8 * 0.04) + (C9 * 0.03)
```

Cada critério é pontuado de 0 a 10.
A nota final é de 0 a 10 (multiplicar por 10 para obter score 0-100).

### Detalhamento dos critérios

| Cód. | Critério | Peso | O que avaliar |
|------|----------|------|--------------|
| C1 | Impacto da headline | 20% | O título para o scroll? Cria curiosidade ou promessa imediata? |
| C2 | Clareza da proposta | 18% | Em 3 segundos o público entende o que está sendo oferecido? |
| C3 | Potencial de conversão | 15% | Preço visível, CTA claro, urgência presente? |
| C4 | Adequação ao nicho | 12% | O visual e a copy falam o idioma do público do nicho? |
| C5 | Hierarquia visual | 10% | O olho percorre: headline > benefício > preço > CTA naturalmente? |
| C6 | Originalidade | 10% | O criativo se diferencia do padrão do feed do nicho? |
| C7 | Qualidade técnica | 8% | Resolução, tipografia, espaçamento, sem artifacts visuais? |
| C8 | Alinhamento com memória | 4% | Segue padrões aprovados, evita padrões rejeitados? |
| C9 | Safe zone | 3% | Nenhum elemento essencial abaixo de Y=1280px? |

### Pesos ajustados por objetivo

Se o objetivo do criativo é CTR (engajamento): aumentar C1 +5% e C6 +5%, reduzir C3 -10%.
Se o objetivo é conversão direta: manter pesos padrão.
Se o objetivo é build awareness: aumentar C4 +5% e C6 +10%, reduzir C3 -15%.

---

## Processo de ranking

### Passo 1: Avaliação individual

O `lt-quality-judge` avalia cada criativo pelos 9 critérios.
Criativos com nota final abaixo de 5.5 (55/100) são eliminados automaticamente.

### Passo 2: Ordenação

Os criativos aprovados são ordenados do maior para o menor score.

### Passo 3: Regras de diversidade (aplicadas pelo lt-final-curator)

Antes de confirmar a seleção final, verificar:
- Máximo 60% dos criativos selecionados podem usar o mesmo template
- Mínimo 2 variações de copy diferentes no conjunto final (se N >= 3)
- Se todos os N melhores forem do mesmo template: substituir o de menor score por um de template diferente (mesmo que score menor)

Objetivo: o usuário recebe variedade real, não N versões do mesmo criativo.

### Passo 4: Seleção final

O `lt-final-curator` confirma os N criativos finais após aplicar as regras de diversidade.

---

## Relatório de entrega

O `lt-delivery-reporter` gera um relatório para o usuário com:

```
CRIATIVOS ENTREGUES - [PRODUTO] - [DATA]

Total gerado internamente: [3N]
Total aprovado na triagem: [X]
Entregando os [N] melhores:

#1 [Nome do arquivo] | Score: [nota]/100 | Template: [nome]
   Destaques: [headline resumida] | Ponto forte: [1 linha]

#2 [Nome do arquivo] | Score: [nota]/100 | Template: [nome]
   Destaques: [headline resumida] | Ponto forte: [1 linha]

(repete para cada criativo entregue)

Recomendação de teste A/B: testar #1 contra #[X] primeiro.
Motivo: maior diferença de abordagem de copy.
```

---

## Outputs esperados

- N arquivos PNG renomeados com convenção: `[produto]-[template]-[numero].png`
- `manifest-final.json` com scores e metadados dos selecionados
- Relatório de entrega em texto
- Criativos não selecionados mantidos em `output/code-mode/batch-[timestamp]/descartados/`

---

## Critérios de aprovação da task

- Todos os N criativos entregues têm score >= 5.5 (55/100)
- O conjunto tem diversidade: pelo menos 2 templates ou 2 abordagens de copy
- Relatório de entrega gerado e legível
- Nenhum criativo com elemento abaixo do safe zone
