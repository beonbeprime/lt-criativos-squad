# Sistema de Memória Evolutiva - LT Criativos

Este diretório armazena o aprendizado acumulado do squad ao longo das sessões.
Cada arquivo representa uma categoria de aprendizado.
Os agentes leem e aplicam estes arquivos antes de gerar qualquer criativo.

---

## Como funciona

O `evolutionary-memory.md` (na pasta config/) escreve nesta pasta após cada sessão.
O conteúdo evolui automaticamente com base no feedback do usuário e nos scores dos criativos.

Nunca apague manualmente entradas validadas.
Para invalidar uma entrada, adicione `[INATIVO]` no início da linha.

---

## Estrutura dos arquivos

| Arquivo | Conteúdo |
|---------|---------|
| `global-rules.md` | Regras absolutas para todos os criativos |
| `visual-preferences.md` | Preferências de estilo visual aprovadas |
| `copy-preferences.md` | Preferências de copywriting aprovadas |
| `prohibitions.md` | O que nunca deve aparecer em nenhum criativo |
| `approved-patterns.md` | Padrões que funcionaram bem (com score e motivo) |
| `rejected-patterns.md` | Padrões que não funcionaram (com motivo e substituto) |
| `niche-learnings.md` | Aprendizados específicos por nicho de mercado |

---

## Formato das entradas

Todas as entradas seguem este padrão:

```
[YYYY-MM-DD] [NICHO ou GLOBAL] Descrição da regra ou aprendizado
```

Exemplos:
```
[2026-04-07] [GLOBAL] Nunca usar travessão em copy de criativo
[2026-04-07] [EMPREENDEDORISMO] Evitar a palavra "mentoria" - usar "método" ou "sistema"
```

---

## Como os agentes aplicam a memória

Antes de gerar qualquer criativo, o agente coordenador lê:
1. `global-rules.md` - verificação obrigatória, nenhuma exceção
2. `prohibitions.md` - verificação obrigatória, nenhuma exceção
3. `visual-preferences.md` - aplicar como padrão se relevante
4. `copy-preferences.md` - aplicar como padrão se relevante
5. `approved-patterns.md` - replicar quando contexto for similar
6. `niche-learnings.md` - filtrar pelo nicho atual

---

## Rollback de uma entrada

Para desfazer uma regra específica, adicione `[INATIVO]` no início:

```
[INATIVO] [2026-04-07] [GLOBAL] Regra que não faz mais sentido
```

Nunca apague a linha original. O histórico é permanente.

---

## Quando a memória é atualizada

- Após feedback negativo do usuário em qualquer elemento do criativo
- Após aprovação explícita de um padrão novo
- Após análise de resultados de CTR e conversão
- Após teste A/B com resultado claro

O squad nunca repete o mesmo erro duas vezes.
