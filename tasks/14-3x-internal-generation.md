# Task 14 - Geração Interna 3x

## Objetivo

Gerar internamente 3 vezes mais criativos do que o usuário pediu.
A seleção final (Task 15) escolhe os melhores para entregar.
O usuário nunca vê o volume bruto, só a curadoria final.

---

## Camada no pipeline

Posição: Camada 6 (executa após direção visual da Task 13, antes do ranking da Task 15)

---

## A regra 3x

Se o usuário pede N criativos, o sistema gera 3N internamente.

Exemplos:
- Usuário pede 3 criativos: sistema gera 9 internamente, entrega os 3 melhores
- Usuário pede 5 criativos: sistema gera 15 internamente, entrega os 5 melhores
- Usuário pede 1 criativo: sistema gera 3 internamente, entrega o melhor

Limite de sessão: máximo 15 gerados internamente por rodada (sem autorização explícita do usuário).
Para volumes maiores, o sistema informa e aguarda confirmação.

---

## Agentes ativados

| Agente | Papel |
|--------|-------|
| `lt-copy-generator-a` | Gera variações de copy (foco em conversão direta) |
| `lt-copy-generator-b` | Gera variações de copy (foco em curiosidade e engajamento) |
| `lt-copy-generator-c` | Gera variações de copy (foco em identificação e dor) |
| `lt-visual-generator-a` | Gera criativos via engine HTML (template primário) |
| `lt-visual-generator-b` | Gera criativos via engine HTML (template alternativo) |
| `lt-visual-generator-c` | Gera criativos via Lovart (variação de estilo visual) |
| `lt-variation-tracker` | Registra todas as combinações geradas para evitar duplicatas |

---

## Processo passo a passo

### Passo 1: Distribuição de variações de copy

Os 3 agentes de copy (`a`, `b`, `c`) trabalham em paralelo.
Cada um recebe os 5 ganchos da Task 12 e gera combinações únicas de headline + subheadline + CTA.

Distribuição:
- Generator A: variações focadas em resultado concreto e urgência
- Generator B: variações focadas em curiosidade e transformação
- Generator C: variações focadas em identificação com a dor e prova social

Regra de diversidade: nenhuma variação pode começar com a mesma palavra.
Regra de originalidade: nenhuma variação pode repetir a mesma estrutura gramatical.

### Passo 2: Cruzamento copy x visual

O `lt-variation-tracker` cria a matriz de combinações:
- Copy A1 + Template primário + Paleta principal
- Copy A2 + Template alternativo + Paleta principal
- Copy B1 + Template primário + Paleta variante
- (e assim por diante até completar 3N combinações)

Regra de evitar redundância: nenhuma combinação pode ter copy idêntica, mesmo em templates diferentes.

### Passo 3: Geração paralela

Os 3 agentes visuais geram os criativos em paralelo.
Cada agente é responsável por um terço das combinações.

Para criativos via engine HTML:
- Usar `renderer.js` com os parâmetros da Task 13
- Salvar em `output/code-mode/batch-[timestamp]/`

Para criativos via Lovart:
- Usar prompt no padrão `lovart-cinematic-prompt-style.md`
- Salvar em `output/lovart/batch-[timestamp]/`

### Passo 4: Registro de geração

O `lt-variation-tracker` registra em `output/code-mode/batch-[timestamp]/manifest.json`:
```json
{
  "requested": N,
  "generated": 3N,
  "batch_id": "timestamp",
  "criativos": [
    {
      "id": "criativo-01",
      "template": "dark-cinematic",
      "copy_type": "conversao-direta",
      "headline": "texto da headline",
      "score_estimado": 0
    }
  ]
}
```

---

## Outputs esperados

- 3N arquivos PNG em `output/code-mode/batch-[timestamp]/`
- `manifest.json` com metadados de cada criativo
- Log de geração sem erros

---

## Critérios de qualidade mínima para passar para a Task 15

Qualquer criativo que não atender a estes critérios é descartado antes do ranking:
- Texto visível e legível (nenhuma sobreposição ou corte)
- Preço presente e visível
- CTA presente e legível
- Nenhum elemento abaixo do safe zone (Y > 1280px)
- Arquivo PNG com resolução 1080x1920
