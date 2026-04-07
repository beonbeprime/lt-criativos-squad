# Task: 02 - Extrair Padrões

## Agentes Envolvidos
- Lead: @visual-pattern-analyst (Vision)
- Suporte: @copy-pattern-analyst (Verse), @color-style-analyst (Chroma), @background-analyst (Stage)

## Objetivo
Extrair padrões visuais, de copy e de estilo dos criativos campeões para criar base de referência para novos lotes.

## Inputs
- `data/champion-catalog.md` (produzido na Task 01)
- Arquivos de imagem dos campeões catalogados

## Processo
1. Vision analisa composição de cada campeão - posição do texto, hierarquia visual, zonas de destaque
2. Verse extrai toda a copy de cada campeão, identifica padrões de H1/H2/CTA
3. Chroma extrai paleta de cores de cada campeão - cores dominantes, acento, texto
4. Stage classifica tema de background de cada campeão nos 7 temas aprovados
5. Cada agente cria seu arquivo de padrões na pasta `data/`
6. Lt-intel-master consolida tudo em `data/pattern-summary.md`

## Outputs
- `data/visual-patterns.md` - composição e hierarquia visual
- `data/copy-patterns.md` - padrões de headline, H2 e CTA
- `data/color-guide.md` - paletas extraídas dos campeões
- `data/background-library.md` - 7 temas de background classificados

## Critério de Conclusão
Quando os 4 arquivos de padrões estiverem criados e consolidados no `data/pattern-summary.md`
