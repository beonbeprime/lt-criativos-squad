/**
 * renderer.js - Motor de renderização HTML para criativos low ticket
 * Squad: lt-criativos v2.0
 *
 * Uso via CLI:
 *   node renderer.js --template dark-cinematic --headline "Sua mentoria em 8 min" --price "R$67" --cta "Quero agora" --output output/test.png
 *
 * Uso como módulo:
 *   const { render } = require('./renderer');
 *   await render({ template: 'dark-cinematic', headline: '...', price: 'R$67', output: 'output/test.png' });
 */

'use strict';

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Diretório base deste script
const BASE_DIR = __dirname;
const TEMPLATES_DIR = path.join(BASE_DIR, 'templates');
const DEFAULT_OUTPUT_DIR = path.join(BASE_DIR, '..', 'output', 'code-mode');

/**
 * Substitui todas as variáveis {{VAR}} no HTML pelo valor correspondente.
 * Variáveis sem valor definido ficam como string vazia.
 */
function substituirVariaveis(html, variaveis) {
  let resultado = html;
  for (const [chave, valor] of Object.entries(variaveis)) {
    const regex = new RegExp(`\\{\\{${chave.toUpperCase()}\\}\\}`, 'g');
    resultado = resultado.replace(regex, valor || '');
  }
  // Remover variáveis não substituídas (sem valor passado)
  resultado = resultado.replace(/\{\{[A-Z_]+\}\}/g, '');
  return resultado;
}

/**
 * Função principal de renderização.
 * @param {Object} params - Parâmetros do criativo
 * @param {string} params.template - Nome do template (sem extensão)
 * @param {string} params.headline - Título principal
 * @param {string} [params.subheadline] - Subtítulo
 * @param {string} [params.price] - Preço principal (ex: "R$67")
 * @param {string} [params.price_installment] - Parcelamento (ex: "ou 3x R$24")
 * @param {string} [params.cta] - Texto do botão CTA
 * @param {string} [params.nicho] - Nicho do produto
 * @param {string} [params.accent_color] - Cor de destaque em hex (ex: "#FF3366")
 * @param {string} [params.bg_color] - Cor de fundo em hex
 * @param {string} [params.output] - Caminho de saída do PNG
 * @returns {Promise<string>} Caminho do arquivo gerado
 */
async function render(params = {}) {
  const {
    template = 'dark-cinematic',
    headline = '',
    subheadline = '',
    price = '',
    price_installment = '',
    cta = '',
    nicho = '',
    accent_color = '#FF3366',
    bg_color = '#0a0a0a',
    output,
  } = params;

  // Determinar caminho de saída
  const outputPath = output || path.join(DEFAULT_OUTPUT_DIR, `${template}-${Date.now()}.png`);

  // Garantir que o diretório de saída existe
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Verificar se o template existe
  const templatePath = path.join(TEMPLATES_DIR, `${template}.html`);
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template não encontrado: ${templatePath}\nTemplates disponíveis: dark-cinematic, white-marble, fire-impact, luxury-minimal, neon-urban`);
  }

  // Carregar e processar o template
  let html = fs.readFileSync(templatePath, 'utf-8');
  html = substituirVariaveis(html, {
    HEADLINE: headline,
    SUBHEADLINE: subheadline,
    PRICE: price,
    PRICE_INSTALLMENT: price_installment,
    CTA: cta,
    NICHO: nicho,
    ACCENT_COLOR: accent_color,
    BG_COLOR: bg_color,
  });

  // Renderizar via Playwright
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Definir viewport exato de Stories/Reels: 1080x1920
    await page.setViewportSize({ width: 1080, height: 1920 });

    // Carregar o HTML diretamente como conteúdo (sem servidor)
    await page.setContent(html, { waitUntil: 'networkidle' });

    // Aguardar fontes e imagens carregarem
    await page.waitForTimeout(1500);

    // Capturar screenshot da página inteira (sem barra de navegação)
    await page.screenshot({
      path: outputPath,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1080, height: 1920 },
    });

    console.log(`Criativo gerado: ${outputPath}`);
    return outputPath;
  } catch (erro) {
    throw new Error(`Falha na renderização: ${erro.message}`);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * Modo de teste: gera 1 criativo com dados mockados para verificar o funcionamento.
 */
async function modoTeste() {
  console.log('Iniciando modo de teste...\n');

  const templates = ['dark-cinematic', 'white-marble', 'fire-impact', 'luxury-minimal', 'neon-urban'];
  const dados = {
    headline: 'Transforme seu negócio em 8 minutos',
    subheadline: 'O método que mais de 5.000 alunos já aplicaram',
    price: 'R$67',
    price_installment: 'ou 3x de R$24,00',
    cta: 'Quero acesso agora',
    nicho: 'Empreendedorismo',
    accent_color: '#FF3366',
  };

  // Testar apenas o primeiro template disponível
  const templateParaTeste = templates[0];
  const templatePath = path.join(TEMPLATES_DIR, `${templateParaTeste}.html`);

  if (!fs.existsSync(templatePath)) {
    console.error(`Template de teste não encontrado: ${templatePath}`);
    console.error('Execute os templates estão criados em engine/templates/');
    process.exit(1);
  }

  try {
    const outputPath = await render({
      ...dados,
      template: templateParaTeste,
      output: path.join(DEFAULT_OUTPUT_DIR, `teste-${templateParaTeste}.png`),
    });
    console.log(`\nTeste concluído com sucesso!`);
    console.log(`Arquivo gerado: ${outputPath}`);
    console.log(`\nPara testar os demais templates, use:`);
    templates.slice(1).forEach(t => {
      console.log(`  node renderer.js --template ${t} --headline "Título aqui" --price "R$67" --cta "Quero agora"`);
    });
  } catch (erro) {
    console.error(`\nErro no teste: ${erro.message}`);
    process.exit(1);
  }
}

/**
 * Parseador de argumentos CLI simples.
 */
function parsearArgs(args) {
  const resultado = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const chave = args[i].slice(2);
      const valor = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
      resultado[chave] = valor;
      if (valor !== true) i++;
    }
  }
  return resultado;
}

// Execução via linha de comando
if (require.main === module) {
  const args = parsearArgs(process.argv.slice(2));

  if (args.test) {
    modoTeste().catch(e => {
      console.error(e.message);
      process.exit(1);
    });
  } else if (args.template || args.headline) {
    render({
      template: args.template,
      headline: args.headline,
      subheadline: args.subheadline,
      price: args.price,
      price_installment: args['price-installment'] || args.price_installment,
      cta: args.cta,
      nicho: args.nicho,
      accent_color: args['accent-color'] || args.accent_color,
      bg_color: args['bg-color'] || args.bg_color,
      output: args.output,
    }).then(caminho => {
      console.log(`Pronto: ${caminho}`);
    }).catch(e => {
      console.error(`Erro: ${e.message}`);
      process.exit(1);
    });
  } else {
    console.log('Uso: node renderer.js --template <nome> --headline "Texto" --price "R$67" --cta "Texto do botão" [--output caminho.png]');
    console.log('Modo teste: node renderer.js --test');
  }
}

module.exports = { render };
