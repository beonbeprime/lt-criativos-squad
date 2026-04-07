# Task: 08 - Analisar Imagens Geradas

## Agentes Envolvidos
- Lead: @image-quality-analyst (Eye)
- Suporte: @iteration-manager (Iter)

## Objetivo
Analisar qualidade das imagens geradas e aprovar ou reprovar cada uma com base em critérios objetivos.

## Inputs
- Imagens em `output/lt-criativos/{data}/raw/`
- `data/briefings/` para comparar resultado com briefing
- `checklists/image-checklist.md`

## Processo
1. Eye abre cada imagem gerada e compara com o briefing correspondente
2. Verifica conformidade: tema correto, presença/ausência de pessoa conforme briefing, qualidade técnica
3. Identifica elementos visuais no terço inferior - qualquer elemento informativo é violação
4. Avalia score de qualidade de 0 a 10 conforme critérios do checklist
5. Classifica resultado: APROVADA (>= 7), APROVADA COM RESSALVA (5-6), REPROVADA (< 5)
6. Iter gerencia criativos reprovados: solicitar regeneração com prompt ajustado (máx 2 tentativas)
7. Registrar tudo em `data/image-analysis-report.md`

## Outputs
- `data/image-analysis-report.md` com status, score e observações de cada imagem
- Lista de imagens aprovadas prontas para safe zone check

## Critério de Conclusão
Quando todas as imagens aprovadas tiverem score >= 7/10 e o relatório de análise estiver completo
