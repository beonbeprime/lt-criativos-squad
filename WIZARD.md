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

## Etapa 3: Configure a Memória Inicial

A memória evolutiva em `_memory/` já tem regras padrão.
Esta etapa é para você personalizar antes de gerar o primeiro batch.

---

**Pergunta 2: Você tem um produto definido?**

Se sim, registre as informações principais para que o squad use em todo batch:

Abra `_memory/global-rules.md` e adicione ao final:

```
[HOJE] [PRODUTO] Nome: [nome do produto]
[HOJE] [PRODUTO] Preço: R$[valor] (ou [N]x de R$[parcela])
[HOJE] [PRODUTO] Promessa: [resultado em X tempo]
[HOJE] [PRODUTO] Âncora de valor: [produto/serviço de R$X que entrega]
```

Exemplo real:

```
[2026-04-07] [PRODUTO] Nome: Método Corpo Livre
[2026-04-07] [PRODUTO] Preço: R$97 (ou 5x de R$21)
[2026-04-07] [PRODUTO] Promessa: Perca 8kg em 21 dias sem academia
[2026-04-07] [PRODUTO] Âncora de valor: Consulta de nutricionista de R$350
```

---

**Pergunta 3: Você tem restrições de copy (palavras proibidas para seu produto)?**

Abra `_memory/prohibitions.md` e registre:

```
[HOJE] [COPY] Nunca usar a palavra "[palavra]" porque [motivo].
```

Exemplo:

```
[2026-04-07] [COPY] Nunca usar "dieta" porque o produto não é sobre restrição alimentar.
[2026-04-07] [COPY] Nunca usar "emagrecer rápido" porque promessa não comprovada pode causar problema com a Meta.
```

---

**Pergunta 4: Você tem preferências visuais definidas (cores, estilo)?**

Abra `_memory/visual-preferences.md` e registre:

```
[HOJE] [VISUAL] Cor de destaque preferida: #[hex]
[HOJE] [VISUAL] Tom visual: [dark/light/colorful]
[HOJE] [VISUAL] Evitar: [estilos ou elementos que não combinam com a marca]
```

---

## Etapa 4: Defina seu Produto (Opcional, mas recomendado)

Se você quer que o squad entenda profundamente o seu produto antes de gerar,
responda às perguntas abaixo diretamente no chat com o squad.

O agente Ofra (offer-researcher) vai processar e salvar na memória:

---

Diga ao squad:

```
define o produto para essa sessão:
- Nome: [nome]
- Preço: R$[valor]
- Promessa principal: [resultado + prazo]
- Público principal: [quem é a pessoa que compra]
- Maior dor do público: [o que a pessoa quer resolver]
- Mecanismo único: [o que torna o produto diferente]
- Âncora de valor: [o que o produto substitui e custaria mais caro]
- Palavras proibidas: [lista separada por vírgula]
```

O squad vai confirmar que recebeu e processar todas as informações antes
de qualquer geração.

---

## Etapa 5: Primeiro Teste

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
