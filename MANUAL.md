# Manual de Instalação - Low Ticket Creative Squad v2.0

Este manual cobre instalação, configuração e operação do squad
do zero até o primeiro criativo gerado.

---

## Pré-requisitos

Antes de começar, confirme que você tem instalado:

| Dependência | Versão mínima | Como verificar |
|-------------|--------------|----------------|
| Node.js | 18 ou superior | `node --version` |
| Python | 3.10 ou superior | `python --version` |
| Git | qualquer recente | `git --version` |
| AIOS instalado | qualquer | `ls C:/Users/Pichau/Desktop/aios` |

O squad usa Playwright (Node.js) para o Modo Código e Python para o Modo API (Lovart).
Você não precisa de ambos, mas o Modo Código é recomendado para testes e validação.

---

## Instalação

### Passo 1: Verificar a instalação do AIOS

O squad faz parte do AIOS e já está na pasta correta:

```
C:/Users/Pichau/Desktop/aios/squads/lt-criativos/
```

Se o diretório existir com o `squad.yaml`, a instalação base está ok.

```bash
ls "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/"
# Deve listar: README.md, squad.yaml, agents/, engine/, config/, etc.
```

### Passo 2: Verificar integridade do squad

Confirme que os 70 agentes estão presentes:

```bash
ls "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/agents/" | wc -l
# Deve retornar 70 (ou próximo disso)
```

Se algum agente estiver faltando, verifique o git status do repositório AIOS
e restaure com `git checkout agents/`.

### Passo 3: Instalar dependências do Engine (Playwright)

O Engine fica em `engine/` e tem o seu próprio `package.json`.

```bash
cd "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/engine"
npm install
```

Isso instala o Playwright (versão 1.42 ou superior) e o Chromium headless.
O download do Chromium pode levar alguns minutos na primeira vez.

Se o Chromium não baixar automaticamente:

```bash
npx playwright install chromium
```

### Passo 4: Configurar referências de campeões

Os criativos campeões precisam estar nas pastas corretas para que o agente Scout
os encontre automaticamente.

Pastas esperadas:

```
C:/Users/Pichau/Desktop/Validados/
C:/Users/Pichau/Desktop/Criativos Validados/
C:/Users/Pichau/Desktop/Criativos Validados/campecao/
```

Se as pastas não existirem, crie-as:

```bash
mkdir -p "C:/Users/Pichau/Desktop/Validados"
mkdir -p "C:/Users/Pichau/Desktop/Criativos Validados/campecao"
```

Adicione pelo menos um criativo PNG em cada pasta. Para o Modo API,
a pasta `campecao/` é a mais importante, pois o `--reference` usa esses arquivos.

### Passo 5: Configurar a API do Lovart (Modo API)

O projeto `lovart-py` fica em:

```
C:/Users/Pichau/Desktop/aios/lovart-py/
```

Verifique se o arquivo `.env` existe e contém a chave de API:

```bash
cat "C:/Users/Pichau/Desktop/aios/lovart-py/.env"
# Deve conter: LOVART_API_KEY=sua_chave_aqui
```

Se não existir, crie o `.env`:

```
LOVART_API_KEY=sua_chave_aqui
```

Para obter a chave, acesse lovart.ai e copie de Settings > API Keys.
O projeto usa Nano Banana Pro com uso ilimitado quando a conta está ativa.

### Passo 6: Testar o Engine

Rode o teste automático do Engine para confirmar que tudo está funcionando:

```bash
cd "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/engine"
node renderer.js --test
```

Saída esperada:

```
Iniciando modo de teste...
Criativo gerado: ../output/code-mode/teste-dark-cinematic.png
Teste concluído com sucesso!
```

Se aparecer erro de template não encontrado, verifique se a pasta `engine/templates/`
tem os arquivos `.html`. Se não tiver, os templates precisam ser criados.

### Passo 7: Primeiro criativo de teste

Com o Engine funcionando, gere um criativo real:

```bash
cd "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/engine"

node renderer.js \
  --template dark-cinematic \
  --headline "Sua mentoria pronta" \
  --subheadline "O método que 5.000 alunos já aplicaram" \
  --price "R$67" \
  --price-installment "ou 10x de R$8,05" \
  --cta "Quero acesso agora" \
  --nicho "Empreendedorismo" \
  --accent-color "#FF3366" \
  --output "../output/code-mode/meu-primeiro-criativo.png"
```

O arquivo PNG estará em:
`C:/Users/Pichau/Desktop/aios/squads/lt-criativos/output/code-mode/meu-primeiro-criativo.png`

---

## Configuração por Modo

### Modo API (Lovart)

O Modo API usa o `lovart-py` para gerar imagens realistas via IA generativa.
É o modo principal para criativos finais de campanha.

**Estrutura do comando:**

```bash
cd "C:/Users/Pichau/Desktop/aios/lovart-py"

python generate.py \
  --prompt "fundo escuro com círculo neon vermelho atrás de homem careca de roupa preta, iluminação dramática, formato 9:16 vertical, terço inferior completamente vazio, qualidade cinematográfica 4K, sem texto renderizado" \
  --reference "C:/Users/Pichau/Desktop/Criativos Validados/campecao/feed-dark-cinematic.png" \
  --output "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/output/lt-criativos/2026-04-07/v1-dark"
```

**Regra absoluta sobre referência:**
Sempre usar `--reference` quando houver campeão aprovado para o tema.
Sem referência, o Lovart gera em estilo próprio diferente do que foi validado.

**Prompt padrão base:**

```
[CENA: descrição do ambiente] com [elemento central: placa/espaço de texto]
na área central superior, iluminação dramática profissional,
formato vertical 9:16, todo texto em português brasileiro,
terço inferior completamente limpo para overlay de UI,
[paleta de cores baseada no tema], qualidade fotográfica realista, cinematográfico 4K,
safe area inferior vazia, sem texto renderizado na imagem
```

### Modo Código (HTML + Playwright)

O Modo Código renderiza criativos sem API, usando templates HTML com variáveis.
Ideal para testes de copy, validação de layout e iterações rápidas.

**Uso via CLI:**

```bash
cd "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/engine"

node renderer.js \
  --template dark-cinematic \
  --headline "Texto da headline" \
  --subheadline "Texto do subheadline" \
  --price "R$97" \
  --price-installment "ou 5x de R$21" \
  --cta "Quero agora" \
  --nicho "Saúde" \
  --accent-color "#00FF88" \
  --bg-color "#050505" \
  --output "../output/code-mode/teste.png"
```

**Uso como módulo Node.js:**

```javascript
const { render } = require('./renderer');

const caminho = await render({
  template: 'white-marble',
  headline: 'Perca 10kg em 30 dias',
  subheadline: 'O método que mais de 3.000 pessoas já testaram',
  price: 'R$47',
  price_installment: 'ou 3x de R$17',
  cta: 'Quero começar agora',
  nicho: 'Emagrecimento',
  accent_color: '#FFD700',
  bg_color: '#f5f5f0',
  output: '../output/code-mode/saude-v1.png',
});

console.log('Criativo gerado em:', caminho);
```

**Templates disponíveis:**

| Template | Energia | Paleta padrão |
|---------|---------|--------------|
| `dark-cinematic` | Urgência, drama, autoridade | Preto, vermelho, branco |
| `white-marble` | Sofisticação, credibilidade | Branco, dourado, bege |
| `fire-impact` | Atenção extrema, calor | Cinza escuro, laranja, vermelho |
| `luxury-minimal` | Aspiração, conquista | Marrom, dourado, creme |
| `neon-urban` | Inovação, tech, futuro | Azul escuro, roxo, neon |

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do `lovart-py` com estas variáveis:

```env
# API do Lovart (obrigatório para Modo API)
LOVART_API_KEY=sua_chave_aqui

# Pasta de saída padrão (opcional, tem fallback em output/)
LT_OUTPUT_DIR=C:/Users/Pichau/Desktop/aios/squads/lt-criativos/output/lt-criativos

# Pasta de campeões (opcional, tem fallback no squad.yaml)
LT_CHAMPIONS_DIR=C:/Users/Pichau/Desktop/Criativos Validados
```

O Engine (Modo Código) não precisa de variáveis de ambiente.
Todos os parâmetros são passados via CLI ou módulo.

---

## Referências de Campeões

Os campeões são a base de toda geração. Sem eles, o squad não tem referência
visual e a qualidade cai drasticamente.

**Como adicionar um novo campeão:**

1. Tenha o PNG do criativo aprovado em mãos
2. Mova para a pasta correta conforme o tipo:
   - Campeão principal (melhor de todos): `C:/Users/Pichau/Desktop/Criativos Validados/campecao/`
   - Validados em geral: `C:/Users/Pichau/Desktop/Criativos Validados/`
   - Referências secundárias: `C:/Users/Pichau/Desktop/Validados/`
3. Nomeie o arquivo com o tema para facilitar o routing:
   - `feed-dark-cinematic.png`
   - `story-white-marble.png`
   - `feed-fire-impact.png`
4. Diga para o squad: "analisa campeões" e ele extrairá os padrões automaticamente

**Estrutura esperada:**

```
C:/Users/Pichau/Desktop/Criativos Validados/
├── campecao/
│   ├── feed-dark-cinematic.png     <- referência para tema Dark
│   ├── story-white-marble.png      <- referência para tema Luxury
│   └── feed-fire-impact.png        <- referência para tema Fire
├── feed-branco-marmore.png
├── fogo-sua-mentoria-storie.png
└── dollar-branco.png
```

---

## Memória Inicial

A pasta `_memory/` começa com arquivos padrão que o squad atualiza ao longo do tempo.
Se você está instalando do zero, os arquivos já contêm regras iniciais:

```
_memory/global-rules.md       <- regras absolutas (nunca apagar)
_memory/copy-preferences.md   <- padrões de copy aprovados
_memory/approved-patterns.md  <- visuais e estruturas validadas
_memory/rejected-patterns.md  <- o que não funciona
_memory/niche-learnings.md    <- aprendizados por nicho
_memory/visual-preferences.md <- preferências de cor e composição
_memory/prohibitions.md       <- proibições registradas
```

Para adicionar uma regra manualmente (sem esperar o squad aprender sozinho),
abra o arquivo correto e adicione no formato:

```
[YYYY-MM-DD] [NICHO ou GLOBAL] Sua regra aqui.
```

Exemplo em `_memory/niche-learnings.md`:

```
[2026-04-07] [SAUDE] Criativos com número concreto de kg perdidos
convertem 40% mais que criativos com linguagem genérica.
```

---

## Troubleshooting

### Playwright não instala

**Sintoma:** `npm install` falha ou `node renderer.js --test` dá erro de módulo.

**Solução:**
```bash
cd "C:/Users/Pichau/Desktop/aios/squads/lt-criativos/engine"
npm install --force
npx playwright install chromium
```

Se ainda falhar, verifique a versão do Node:
```bash
node --version
# Precisa ser 18 ou superior
```

### Lovart não conecta

**Sintoma:** `python generate.py` retorna erro de autenticação ou timeout.

**Solução:**
1. Verifique se o `.env` existe em `lovart-py/`
2. Confirme que a chave está válida no painel do Lovart.ai
3. Teste a conexão manualmente:
   ```bash
   cd "C:/Users/Pichau/Desktop/aios/lovart-py"
   python -c "from client import LovartClient; c = LovartClient(); print(c.ping())"
   ```

### Safe zone incorreta

**Sintoma:** Texto aparece no terço inferior do Story (Y > 1280).

**Causa:** O template HTML não está respeitando a safe zone, ou o prompt Lovart
não incluiu a instrução de área limpa.

**Solução para Modo Código:**
Abra o template em `engine/templates/` e verifique que nenhum elemento
tem `top` ou `bottom` que coloque conteúdo abaixo de Y=1280.

**Solução para Modo API:**
Inclua no final do prompt:
`"terço inferior da imagem completamente vazio e limpo, safe area inferior vazia"`

### Criativos abaixo do threshold

**Sintoma:** O agente Judge pontua todos abaixo de 70 e o squad entra em loop.

**Causa mais comum:** Ausência de referência, headline genérica ou safe zone violada.

**Solução:**
1. Verifique se há campeão na pasta `campecao/`
2. Rode `*analyze-champions` antes de gerar
3. Revise os padrões em `data/champion-patterns.yaml`
4. Se o problema persistir, diga: "explica por que o score está baixo"
   para o agente Judge detalhar os critérios com nota baixa

---

## Atualização (v1 para v2)

A v2.0 trouxe mudanças estruturais em relação à v1 original.

| Aspecto | v1 | v2 |
|---------|----|----|
| Número de agentes | 28 (6 tiers) | 70 (8 camadas) |
| Produto | Agente Arquiteto (fixo) | Multi-produto, multi-nicho |
| Avaliação | Score simples | 9 dimensões, 0-100 |
| Geração | 1x, entrega direta | 3x interno, entrega os melhores |
| Memória | Sem memória persistente | Memória evolutiva em `_memory/` |
| Engine HTML | Não existia | `engine/renderer.js` com Playwright |
| Camada de mensagem | Não existia | Camada 2 com 8 agentes dedicados |
| Camada de direção visual | Não existia | Camada 5 com 5 agentes dedicados |

**O que fazer ao migrar da v1:**

1. Seus campeões continuam funcionando, as pastas são as mesmas
2. As regras criativas em `config/creative-rules.md` foram mantidas
3. Os padrões em `data/` foram expandidos mas são compatíveis
4. A memória em `_memory/` é nova: registre suas preferências existentes nos arquivos
5. O `squad.yaml` agora tem 70 agentes, mas os comandos antigos ainda funcionam
