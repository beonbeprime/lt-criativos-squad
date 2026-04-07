# Task: 07 - Gerar Imagens no Lovart

## Agentes Envolvidos
- Lead: @lt-intel-master (Orion)

## Objetivo
Gerar imagens via Lovart usando os prompts validados, salvando os resultados em pasta organizada por data.

## Inputs
- `data/prompts/validated-prompts.md` (produzido na Task 06)
- Projeto lovart-py em `C:/Users/Pichau/Desktop/aios/lovart-py/`

## Processo
1. Orion acessa projeto lovart-py
2. Verifica disponibilidade do Lovart antes de iniciar
3. Para cada prompt validado (na ordem T001 a T010):
   a. Executar geração via Lovart com o prompt
   b. Usar flag --reference quando disponível
   c. Aguardar conclusão da geração
   d. Baixar imagem gerada
4. Salvar imagens em `output/lt-criativos/{data}/raw/`
5. Nomear cada imagem: `ARQ-{data}-T{NNN}_raw.png`
6. Se Lovart indisponível: documentar em `data/lovart-error.md` e sinalizar ao usuário com alternativas (Midjourney, DALL-E 3)

## Outputs
- Imagens raw em `output/lt-criativos/{data}/raw/`
- 10 arquivos PNG nomeados conforme padrão ARQ

## Critério de Conclusão
Quando todas as 10 imagens estiverem geradas, baixadas e salvas na pasta raw com nomenclatura correta
