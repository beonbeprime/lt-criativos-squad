# Task: 06 - Validar Prompts

## Agentes Envolvidos
- Lead: @prompt-validator (Valid)

## Objetivo
Revisar e aprovar todos os prompts antes de enviar para o Lovart, garantindo conformidade com todos os requisitos técnicos e criativos.

## Inputs
- `data/prompts/batch-prompts.md`
- `data/prompts/{id}-prompt.md` individuais

## Processo
1. Valid lê cada prompt e aplica o checklist de validação
2. Prompts com todos os 8 pontos aprovados: marcados como "APROVADO"
3. Prompts com falhas: ajustar e registrar o que foi alterado
4. Gerar relatório consolidado em `data/prompts/validated-prompts.md`

## Checklist por Prompt
- [ ] Formato 9:16 especificado explicitamente
- [ ] Terço inferior limpo especificado ("bottom third completely clean")
- [ ] Paleta de cores em hex presente (mínimo 2 cores)
- [ ] Elemento central para overlay de texto definido
- [ ] Qualidade 4K ou cinematic especificada
- [ ] Prompt inteiramente em inglês
- [ ] Comprimento adequado: entre 100 e 300 palavras
- [ ] Flag --reference presente quando há campeão de referência

## Outputs
- `data/prompts/validated-prompts.md` com status de cada prompt (APROVADO / AJUSTADO + motivo)

## Critério de Conclusão
Quando todos os 10 prompts tiverem aprovação registrada pelo Valid no arquivo de validação
