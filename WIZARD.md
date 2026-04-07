# Wizard de Setup - Low Ticket Creative Squad v2.0

Bem-vindo ao setup guiado. Este wizard te leva do zero ao primeiro criativo
em menos de 15 minutos.

Responda às perguntas de cada etapa para configurar o squad exatamente
para o seu projeto.

---

## Etapa 1: Identifique seu Modo de Operação

Você precisa gerar criativos com imagens fotorrealistas (via IA generativa)
ou quer testar layouts e copy rapidamente?

---

**Opção A: Modo API (Lovart)**
Gera imagens fotorrealistas via Lovart.ai.
Exige chave de API e criativos campeões como referência.
Melhor para criativos finais prontos para campanha.

**Opção B: Modo Código (HTML + Playwright)**
Renderiza criativos via HTML + CSS + captura de tela.
Não exige API externa. Roda 100% local.
Melhor para testes rápidos de copy, validação de layout e iteração.

**Opção C: Ambos os modos**
Usar Modo Código para validar copy e layout, depois Modo API para
geração final com imagens realistas.

---

**Se você escolheu Opção A ou C:**

Você tem a chave de API do Lovart?

- Sim: adicione em `C:/Users/Pichau/Desktop/aios/lovart-py/.env`
  ```
  LOVART_API_KEY=sua_chave_aqui
  ```
- Não: acesse lovart.ai > Settings > API Keys para gerar.

---

**Se você escolheu Opção B ou C:**

Instale as dependências do Engine:

```bash
cd "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/engine"
npm install
npx playwright install chromium
```

Confirme que funcionou:

```bash
node renderer.js --test
# Esperado: "Teste concluído com sucesso!"
```

---

## Etapa 2: Configure suas Referências de Campeões

Os campeões são a base de toda geração. Sem eles, o squad não tem
de onde extrair padrões e a qualidade cai.

---

**Pergunta 1: Você tem criativos validados (que já foram veiculados e performaram)?**

- Sim: vá para "Adicionar campeões existentes" abaixo.
- Não: vá para "Começar sem campeões" abaixo.

---

**Adicionar campeões existentes:**

1. Verifique que as pastas existem:
   ```bash
   ls "C:/Users/Pichau/Desktop/Criativos Validados/campecao/"
   ```
   Se não existir:
   ```bash
   mkdir -p "C:/Users/Pichau/Desktop/Criativos Validados/campecao"
   mkdir -p "C:/Users/Pichau/Desktop/Validados"
   ```

2. Mova seus melhores criativos PNG para:
   - Melhor de todos (vai virar o `--reference` padrão): pasta `campecao/`
   - Demais validados: pasta `Criativos Validados/`

3. Nomeie seguindo o padrão de tema para facilitar o routing:
   - `feed-dark-cinematic.png`
   - `story-white-marble.png`
   - `feed-fire-impact.png`
   - `story-wealth-money.png`

4. Diga ao squad: `*analyze-champions`
   O agente Scout vai ler todas as pastas e extrair padrões automaticamente.

---

**Começar sem campeões:**

Você pode começar sem campeões usando os temas validados que já estão
em `config/creative-rules.md`. O squad vai gerar com base nesses padrões
pré-definidos, sem a etapa de análise de campeões específicos.

Nesse caso, o primeiro comando recomendado é:

```
faça um criativo de teste sem campeão usando o tema dark-cinematic
```

Guarde os criativos que performarem bem e adicione como campeões depois.

---

## Etapa 3: Configure o Produto (Automático)

Não é necessário editar arquivos manualmente. O squad faz isso sozinho.

---

Na primeira vez que você ativar o Zeuz Criativos, ele detecta que nenhum produto
foi configurado e faz as perguntas automaticamente, uma por uma:

```
Zeuz Criativos, faça novos criativos.
```

O agente Zeuz vai responder com a primeira pergunta do onboarding. Responda
e ele continua até completar as 8 perguntas. As informações são salvas na
memória e nunca mais precisam ser repetidas.

---

**Atalho: GPT com áudio**

Se preferir responder tudo de uma vez, abra o ChatGPT, ative o microfone e
fale as respostas para as 8 perguntas com detalhes. Depois cole o resultado
no Claude Code com:

```
Zeuz Criativos, vou colar o briefing do meu produto abaixo. Salve e use como padrão.

[cole aqui o texto gerado pelo GPT]
```

---

**Atalho: Arquivo .md ou PDF**

Se você já tem um briefing escrito em arquivo, cole o caminho diretamente:

```
Zeuz Criativos, meu briefing está em C:/Users/.../briefing.md - leia e salve como padrão.
```

---

**As 8 perguntas do onboarding:**

1. Qual é o nome do produto e o preço?
2. Qual é o nicho?
3. Quem é o público? (idade, situação, dor principal)
4. Qual é a promessa principal? (resultado + prazo)
5. Quais são as principais objeções do público?
6. Tem prova ou resultado real disponível?
7. Tem algo que NUNCA deve aparecer nos criativos?
8. Tem um arquivo .md com briefing completo?

---

**Regras de copy e visuais adicionais**

Após o onboarding, se quiser registrar preferências específicas, diga ao squad:

```
registra que nunca devo usar a palavra "dieta" nos criativos.
registra que prefiro fundo escuro com texto branco.
```

O agente Memo classifica e salva automaticamente nos arquivos corretos.

---

## Etapa 4: Primeiro Teste

Com tudo configurado, rode o primeiro criativo para validar o setup completo.

---

**Teste rápido (Modo Código, sem API):**

```bash
cd "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/engine"

node renderer.js \
  --template dark-cinematic \
  --headline "Sua mentoria pronta" \
  --subheadline "O método que 5.000 mentorados já aplicaram" \
  --price "R$67" \
  --price-installment "ou 10x de R$8,05" \
  --cta "Quero acesso agora" \
  --nicho "Empreendedorismo" \
  --accent-color "#FF3366" \
  --output "../output/code-mode/wizard-teste.png"
```

Abra o arquivo gerado em:
`C:/Users/Pichau/Desktop/aios/squads/lt-criativos/output/code-mode/wizard-teste.png`

Verifique:
- O terço inferior está limpo (sem texto abaixo de Y=1280)?
- A headline está visível e legível?
- O preço aparece com destaque?
- O CTA está claro?

---

**Teste via squad (pipeline completo):**

Se o Modo API está configurado e você tem campeões, rode:

```
*analyze-champions
```

Espere o agente Scout confirmar que analisou os campeões.
Depois:

```
faça 3 criativos de teste usando o tema dark-cinematic
```

O squad vai rodar o pipeline completo: análise, briefing, copy 3x,
direção visual, prompts Lovart, avaliação 9 dimensões e entrega dos aprovados.

---

## Configuração Completa

Quando os itens abaixo estiverem marcados, o setup está pronto:

- [ ] Modo de operação definido (API, Código ou Ambos)
- [ ] Dependências instaladas (npm install + playwright install chromium)
- [ ] Chave do Lovart configurada no `.env` (se Modo API)
- [ ] Pastas de campeões criadas e populadas (ou decisão de começar sem)
- [ ] Produto registrado na `_memory/global-rules.md`
- [ ] Proibições registradas na `_memory/prohibitions.md` (se houver)
- [ ] Primeiro teste executado e PNG gerado com sucesso
- [ ] Safe zone verificada (terço inferior limpo)

---

## Próximos Passos Após o Setup

Agora que o squad está configurado, os comandos mais usados no dia a dia são:

**Gerar um batch completo:**
```
faça novos criativos
```

**Analisar novos campeões que você adicionou:**
```
*analyze-champions
```

**Escalar um campeão específico:**
```
escala o campeão feed-dark-cinematic.png
```

**Ver o ranking dos criativos gerados:**
```
ranking criativos
```

**Registrar feedback sobre um criativo:**
```
o criativo v3-copy-variante ficou bom, registra como padrão aprovado
```

**Registrar o que não funcionou:**
```
o criativo v8-viagem-louca não performou, registra que viagens loucas não convertem para esse público
```

---

## Dicionário Rápido (Termos do Squad)

| Termo | Significado |
|-------|------------|
| Campeão | Criativo que já rodou e performou bem no Meta Ads |
| Safe zone | Área do terço inferior do Story que deve ficar 100% limpa |
| Batch | Um conjunto de variações geradas de uma vez |
| Matriz 2+8 | As 10 variações anti-agrupamento do Meta Ads |
| Score | Nota 0-100 do agente Judge usando as 9 dimensões |
| Threshold | Nota mínima 70 para o criativo ser entregue |
| Anti-agrupamento | Técnica de diversificação para evitar que o Meta pare de distribuir |
| VIAGEM LOUCA (V8) | Variação com imagem absurda e inesperada para scroll-stop extremo |
| Geração 3x | O squad gera 3 criativos para cada 1 que vai entregar |

---

## Ajuda

Se travar em qualquer etapa, use os comandos de ajuda:

```
*help
```

Para diagnóstico completo do squad:

```
verifica o estado do squad lt-criativos
```

Para suporte com o Engine:

```bash
node renderer.js --help
```
