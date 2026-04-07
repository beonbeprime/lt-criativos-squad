# LT Criativos Engine v2.0

Motor de renderização HTML para criativos low ticket.
Converte templates HTML em imagens PNG 1080x1920 via Playwright.

---

## O que é

O engine recebe um template HTML e variáveis de conteúdo, substitui os placeholders `{{VAR}}` e renderiza via Playwright (Chromium headless) numa tela de 1080x1920 pixels, exportando PNG pronto para Stories e Reels do Instagram.

---

## Pré-requisitos

- Node.js 18+
- npm

Instalar dependências:
```bash
cd squads/lt-criativos/engine
npm install
```

Na primeira execução o Playwright baixa o Chromium automaticamente (~150 MB).

---

## Como usar

### Via CLI

```bash
node renderer.js \
  --template dark-cinematic \
  --headline "Sua mentoria em 8 minutos" \
  --subheadline "O método de 5.000 alunos" \
  --price "R$67" \
  --price-installment "ou 3x de R$24,00" \
  --cta "Quero acesso agora" \
  --nicho "Empreendedorismo" \
  --accent-color "#FF3366" \
  --output "output/meu-criativo.png"
```

### Como módulo Node.js

```javascript
const { render } = require('./renderer');

const caminho = await render({
  template: 'dark-cinematic',
  headline: 'Sua mentoria em 8 minutos',
  subheadline: 'O método de 5.000 alunos',
  price: 'R$67',
  price_installment: 'ou 3x de R$24,00',
  cta: 'Quero acesso agora',
  nicho: 'Empreendedorismo',
  accent_color: '#FF3366',
  output: 'output/meu-criativo.png',
});

console.log('Criativo gerado em:', caminho);
```

### Modo teste

Verifica se o engine está funcionando corretamente com dados mockados:

```bash
npm test
# ou
node renderer.js --test
```

---

## Templates disponíveis

| Nome | Estilo | Melhor para |
|------|--------|-------------|
| `dark-cinematic` | Fundo preto com luz neon colorável | Produtos de método, tech, mindset |
| `white-marble` | Mármore branco com dourado | Infoprodutos premium, feminino, luxo |
| `fire-impact` | Gradiente preto ao laranja, agressivo | Urgência, desconto, conversão direta |
| `luxury-minimal` | Branco limpo, minimalista editorial | Produtos de autoridade, coaching caro |
| `neon-urban` | Grid tech com neon RGB | IA, automação, digital, futurismo |

---

## Variáveis suportadas

| Placeholder | Descrição | Obrigatório |
|-------------|-----------|-------------|
| `{{HEADLINE}}` | Título principal do criativo | Sim |
| `{{SUBHEADLINE}}` | Subtítulo ou reforço de promessa | Não |
| `{{PRICE}}` | Preço principal (ex: "R$67") | Sim |
| `{{PRICE_INSTALLMENT}}` | Parcelamento (ex: "ou 3x de R$24,00") | Não |
| `{{CTA}}` | Texto do botão de ação | Sim |
| `{{NICHO}}` | Nicho do produto (pode aparecer como tag) | Não |
| `{{ACCENT_COLOR}}` | Cor de destaque em hex (ex: "#FF3366") | Não (default: #FF3366) |
| `{{BG_COLOR}}` | Cor de fundo em hex | Não (varia por template) |

---

## Safe zone

O Instagram cobre o terço inferior da imagem com elementos de UI (botões, @, música).
Nenhum elemento essencial deve ficar abaixo de Y=1280px (dos 1920px totais).

Os templates já respeitam essa regra. Ao customizar, verifique sempre se o CTA
e o preço ficam acima dessa linha.

---

## Saída dos arquivos

Por padrão, os criativos são salvos em:
```
squads/lt-criativos/output/code-mode/
```

O diretório é criado automaticamente se não existir.

---

## Troubleshooting

| Erro | Causa | Solução |
|------|-------|---------|
| `Template não encontrado` | Nome de template incorreto | Verificar lista de templates disponíveis acima |
| `Cannot find module 'playwright'` | Dependências não instaladas | Rodar `npm install` na pasta engine/ |
| `browserType.launch: Executable doesn't exist` | Chromium não baixado | Rodar `npx playwright install chromium` |
| PNG em branco ou cortado | Fontes não carregaram | Verificar conexão de internet (Google Fonts CDN) |
| Conteúdo cortado na parte inferior | Conteúdo abaixo do safe zone | Ajustar posicionamento no template HTML |
