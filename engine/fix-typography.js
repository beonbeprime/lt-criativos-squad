/**
 * fix-typography.js
 * Injeta regras CSS anti-quebra de linha em todos os templates
 * Regra: preços e valores nunca quebram de linha. Títulos sem hifenização.
 */

const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, 'templates');

// CSS injetado no final de cada <style>
const INJECT_CSS = `
    /* === REGRAS ANTI-QUEBRA (global) === */
    /* Preços e valores monetários nunca quebram linha */
    .price,.inst,.price-installment,.vr-num,.sr-val,.badge-price,
    .start,.start span,.value,.value-row,.vr-label+.vr-num,
    .accent-text,.price-row,.price-wrapper .price,
    .cta-text,.note,.start-note,.hero-value {
      white-space: nowrap;
    }
    /* Títulos sem hifenização automática */
    .headline,.subheadline,.h1,.h2,.h3,.top-h,.top-headline,
    .body,.lead,.nicho,.nicho-tag,.top-nicho,
    .accent,.sub-label,.step-row,.vr-label {
      hyphens: none;
      word-break: keep-all;
    }
    /* Garante que headline e subheadline preencham bem sem órfãos */
    .headline,.h1 { text-wrap: balance; }
    .subheadline,.body,.h2 { text-wrap: pretty; }
`;

const files = fs.readdirSync(TEMPLATES_DIR).filter(f => f.endsWith('.html'));
let fixed = 0;
let skipped = 0;

for (const file of files) {
  const filePath = path.join(TEMPLATES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Não duplicar injeção
  if (content.includes('REGRAS ANTI-QUEBRA')) {
    skipped++;
    continue;
  }

  // Injeta antes do fechamento da tag </style>
  const styleCloseIndex = content.lastIndexOf('</style>');
  if (styleCloseIndex === -1) {
    console.log(`  SKIP (sem </style>): ${file}`);
    skipped++;
    continue;
  }

  content = content.slice(0, styleCloseIndex) + INJECT_CSS + content.slice(styleCloseIndex);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  OK: ${file}`);
  fixed++;
}

console.log(`\nConcluído: ${fixed} corrigidos, ${skipped} ignorados.`);
