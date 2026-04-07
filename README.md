# Low Ticket Creative Squad (Zeuz) v2.0

Squad de criação de criativos low ticket com 69 agentes em 8 camadas.
Opera com qualquer produto entre R$9 e R$297, em qualquer nicho.
Gera 3x o volume internamente, avalia cada criativo com 9 critérios
e entrega apenas os que atingem score mínimo 70.

---

## Quick Start

```bash
# 1. Analisar campeões da pasta e extrair padrões
*analyze-champions

# 2. Gerar batch completo de criativos
faça novos criativos

# 3. Escalar um campeão específico com a matriz 2+8
escala o campeão feed-dark-cinematic.png
```

---

## O que esse squad faz

Recebe um produto low ticket, analisa os criativos campeões existentes,
extrai padrões visuais e de copy, gera briefings detalhados e produz
criativos em formato Story (1080x1920) e Feed (1350x1080) prontos para
subir no Meta Ads. Cada batch entrega até 10 variações com relatório
de ranking, notas por dimensão e prompts reproduzíveis.

---

## Modos de Operação

### Modo API (Lovart)

Usa o projeto `lovart-py` para gerar as imagens via API do Lovart.ai.
Requer chave de API configurada e, obrigatoriamente, uma imagem de
referência aprovada (`--reference`) para que o estilo dos campeões
seja preservado.

```bash
# Geração com referência (obrigatório quando há campeão aprovado)
python lovart-py/generate.py \
  --prompt "fundo de mármore branco com homem de terno na direita..." \
  --reference "C:/Users/Pichau/Desktop/Criativos Validados/campecao/feed-dark.png"
```

### Modo Código (HTML + Playwright)

Renderiza criativos diretamente via HTML + CSS + Playwright, sem depender
de API externa. Útil para testes rápidos, iteração de copy e validação
de layout antes de gerar via Lovart.

```bash
# Dentro de engine/
npm install
node renderer.js --template dark-cinematic \
  --headline "Sua mentoria pronta" \
  --price "R$67" \
  --cta "Quero acesso agora" \
  --output ../output/code-mode/teste.png

# Modo teste automático (usa todos os templates disponíveis)
node renderer.js --test
```

Templates disponíveis: `dark-cinematic`, `white-marble`, `fire-impact`,
`luxury-minimal`, `neon-urban`.

---

## Arquitetura das 8 Camadas

| Camada | Nome | Agentes | Função |
|--------|------|---------|--------|
| 0 | Orquestração | 8 | Direção, routing, memória, classificação de peso, otimização de recursos |
| 1 | Inteligência | 10 | Análise de campeões, nicho, público-alvo, oferta e concorrência |
| 2 | Estratégia de Mensagem | 8 | Identificação, clareza, promessa, hooks verbais e visuais, dor e desejo |
| 3 | Estratégia | 6 | Briefing, planejamento de batch, variações, escala e ganchos |
| 4 | Copy | 12 | Geração massiva, refinamento, auditoria anti-genérico e anti-IA |
| 5 | Direção Visual | 5 | Conceito visual, mockup fotográfico, realismo, variação de cena |
| 6 | Produção | 5 | Prompts Lovart, validação, formato 9:16 e safe zone |
| 7 | Formato e Entrega | 5 | Corte inteligente Feed, empacotamento, organização por batch |
| 8 | Avaliação | 9 | Score 0-100, curadoria, compliance Meta Ads e entrega dos aprovados |

### Agentes por camada

**Camada 0 - Orquestração**
- Zeuz (executive-director) - visão macro e aprovação final
- Vox (lt-intel-master) - lead orquestrador
- Rota (master-router) - interpreta a demanda e ativa as camadas certas
- Flux (flow-coordinator) - sequência e dependências
- Task (task-manager) - quebra em subtarefas acionáveis
- Status (state-controller) - rastreia o estado de cada criativo
- Memo (evolutionary-memory) - registra preferências e feedback do usuário
- Peso (demand-classifier) - classifica peso MICRO/LEVE/MÉDIO/MAX
- Eco (resource-optimizer) - curto-circuita quando a qualidade já foi atingida

**Camada 1 - Inteligência**
- Scout (champion-researcher), Vis (visual-pattern-analyst),
  Leo (copy-pattern-analyst), Stat (data-specialist),
  Diff (data-comparator), Prism (color-style-analyst),
  Lens (background-analyst), Nix (niche-researcher),
  Aura (audience-researcher), Ofra (offer-researcher)

**Camada 4 - Copy (destaques)**
- Burst (first-gen-copywriter) - gera volume massivo bruto
- Tens (commercial-tension-copywriter) - refina tensão comercial
- Cut (simplification-copywriter) - encurta sem perder força
- Kill2 (anti-generic-auditor) - elimina clichês e frases fracas
- Human (anti-ai-auditor) - detecta e remove linguagem robótica

**Camada 8 - Avaliação**
- Judge (lt-quality-scorer) - score 0-100 nas 9 dimensões
- Pick (final-curator) - seleciona os melhores para entrega

---

## Comandos Principais

| Comando | O que faz |
|---------|-----------|
| `*analyze-champions` | Ativa Camada 1 completa, extrai padrões de criativos campeões |
| `faça novos criativos` | Pipeline completo, Camadas 1 a 8, entrega batch com ranking |
| `gera batch de criativos` | Sinônimo do comando acima |
| `escala o campeão [arquivo]` | Ativa variation-architect com foco na matriz 2+8 |
| `quick batch LT` | Batch rápido com menor orquestração, para iteração ágil |
| `analisa criativos campeões` | Só análise e relatório, sem geração |
| `ranking criativos` | Mostra os criativos com maior score no histórico |

---

## Sistema de Avaliação

Cada criativo recebe uma nota de 0 a 100 pelo agente Judge (lt-quality-scorer).

**Fórmula:** `(soma das 9 notas x 1,111)` arredondada para inteiro

**As 9 dimensões:**

| # | Dimensão | O que avalia |
|---|----------|-------------|
| 1 | Clareza da mensagem | Entendimento em 3 segundos por pessoa leiga |
| 2 | Identificação do público | O avatar se reconhece no criativo? |
| 3 | Força da promessa | Resultado concreto + prazo + remoção de objeção |
| 4 | Força do hook verbal | Headline que para o scroll |
| 5 | Força do hook visual | Elemento visual que gera curiosidade |
| 6 | Harmonia visual | Paleta, tipografia e layout coerentes |
| 7 | Naturalidade anti-IA | Parece humano? Não tem linguagem robótica? |
| 8 | Potencial de clique | Provoca ação imediata? |
| 9 | Potencial de compra | Qualifica o lead? Reduz barreira psicológica? |

Score mínimo para entrega: **70**. Abaixo disso, o agente Loop (iteration-manager)
aciona retrabalho automático (máximo 2 iterações internas antes de escalar ao usuário).

---

## Memória Evolutiva

O agente Memo (evolutionary-memory) mantém os arquivos em `_memory/` atualizados
a cada sessão. Os aprendizados se acumulam e influenciam as próximas gerações.

| Arquivo | Conteúdo |
|---------|---------|
| `_memory/global-rules.md` | Regras absolutas de todos os criativos |
| `_memory/copy-preferences.md` | Padrões de copy aprovados pelo usuário |
| `_memory/approved-patterns.md` | Visuais e estruturas validadas |
| `_memory/rejected-patterns.md` | O que não funciona (nunca repetir) |
| `_memory/niche-learnings.md` | Aprendizados específicos por nicho |
| `_memory/visual-preferences.md` | Preferências de cor, tipografia e composição |
| `_memory/prohibitions.md` | Proibições registradas ao longo das sessões |

Para registrar um aprendizado manualmente: "registra que [observação]".
O agente Memo atualiza o arquivo correto automaticamente.

---

## Engine (Modo Código)

O `engine/renderer.js` renderiza criativos 1080x1920 sem depender de API.
Usa Playwright com Chromium headless e templates HTML variáveis.

```javascript
// Uso como módulo Node.js
const { render } = require('./engine/renderer');

await render({
  template: 'dark-cinematic',
  headline: 'Sua mentoria pronta',
  subheadline: 'Mais de 5.000 mentorados aplicaram esse método',
  price: 'R$67',
  price_installment: 'ou 10x de R$8,05',
  cta: 'Quero acesso agora',
  nicho: 'Empreendedorismo',
  accent_color: '#FF3366',
  bg_color: '#0a0a0a',
  output: 'output/code-mode/meu-criativo.png',
});
```

**Variáveis de template disponíveis:**
`{{HEADLINE}}`, `{{SUBHEADLINE}}`, `{{PRICE}}`, `{{PRICE_INSTALLMENT}}`,
`{{CTA}}`, `{{NICHO}}`, `{{ACCENT_COLOR}}`, `{{BG_COLOR}}`

---

## Regra dos 3x

O squad gera internamente 3 vezes mais criativos do que vai entregar.
O agente Pick (final-curator) seleciona os melhores com base no score.

Exemplo: se o briefing pede 10 criativos, o squad gera 30 internamente,
avalia todos com as 9 dimensões e entrega os 10 com maior score (mínimo 70).

Isso garante qualidade sem exigir aprovação manual em cada iteração.

---

## Referências dos Campeões

Os criativos validados ficam em duas pastas no Desktop:

```
C:/Users/Pichau/Desktop/Validados/
C:/Users/Pichau/Desktop/Criativos Validados/
C:/Users/Pichau/Desktop/Criativos Validados/campecao/
```

O agente Scout (champion-researcher) lê essas pastas automaticamente
ao iniciar o pipeline. Para adicionar um campeão novo, basta mover o
arquivo PNG para a pasta correta. Nenhuma configuração adicional.

---

## Matriz de Variações 2+8 (Anti-Agrupamento)

O Meta Ads agrupa criativos parecidos e reduz a distribuição dos menores.
A matriz 2+8 garante diversidade suficiente para escapar do agrupamento.

| Variação | O que muda | O que preserva |
|----------|-----------|----------------|
| Próxima 1 | Cor do accent | Copy idêntica ao campeão |
| Próxima 2 | Ancoragem de preço | Visual idêntico ao campeão |
| V1 | Cor do background | Copy idêntica |
| V2 | Copy principal | Visual do campeão |
| V3 | Copy e cor | Composição e estrutura |
| V4 | Ângulo de público específico (médico, advogado...) | Estrutura visual |
| V5 | Prova social como núcleo | Estrutura visual |
| V6 | Urgência e escassez | Estrutura principal |
| V7 | Remove crença falsa | CTA e preço |
| V8 | VIAGEM LOUCA (imagem absurda para scroll-stop extremo) | Copy e preço |

---

## Estrutura de Arquivos

```
squads/lt-criativos/
├── README.md                    <- este arquivo
├── MANUAL.md                    <- instalação e configuração passo a passo
├── WIZARD.md                    <- setup guiado interativo
├── squad.yaml                   <- definição do squad (69 agentes, 8 camadas)
│
├── agents/                      <- 69 arquivos .md (um por agente)
│   ├── lt-intel-master.md       <- lead (Vox)
│   ├── executive-director.md    <- Zeuz (Camada 0)
│   └── ...
│
├── config/
│   ├── creative-rules.md        <- regras criativas do produto
│   └── format-specs.md          <- especificações técnicas de formato
│
├── data/
│   ├── champion-patterns.yaml   <- padrões extraídos dos campeões
│   └── copy-formulas.yaml       <- fórmulas de copy validadas
│
├── engine/
│   ├── renderer.js              <- motor HTML+Playwright
│   ├── package.json
│   └── templates/               <- templates HTML (dark-cinematic, white-marble...)
│
├── _memory/                     <- memória evolutiva (atualizada a cada sessão)
│   ├── global-rules.md
│   ├── copy-preferences.md
│   ├── approved-patterns.md
│   ├── rejected-patterns.md
│   ├── niche-learnings.md
│   ├── visual-preferences.md
│   └── prohibitions.md
│
├── output/                      <- criativos gerados (ignorado pelo git)
│   ├── lt-criativos/
│   │   └── {YYYY-MM-DD}/
│   │       ├── proxima-1/
│   │       ├── v1-cor-variante/
│   │       └── relatorio-batch.md
│   └── code-mode/
│
├── tasks/                       <- tarefas do pipeline
├── workflows/                   <- workflows completos
│   └── lt-full-pipeline.md
├── checklists/                  <- checklists de qualidade
└── _versions/                   <- backups FULLSAFE
```

---

## Proibições Absolutas

| Proibido | Motivo |
|---------|--------|
| Fundo branco puro sem textura | Invisível no feed branco do Instagram |
| Texto na safe zone (Y > 1280 no Story) | UI do Instagram encobre completamente |
| Palavras: "curso", "aulas", "conteúdo", "módulos" | Posicionamento errado do produto |
| Gerar sem `--reference` quando há campeão aprovado | Lovart inventa estilo diferente |
| Omitir o preço | Transparência e qualificação do lead |
| Mais de 1 argumento principal por criativo | Dilui o foco da mensagem |
| Texto em inglês | Produto 100% em português brasileiro |

---

## Referências

- Regras criativas completas: `config/creative-rules.md`
- Especificações técnicas: `config/format-specs.md`
- Padrões dos campeões: `data/champion-patterns.yaml`
- Fórmulas de copy: `data/copy-formulas.yaml`
- Squad config (todos os 69 agentes): `squad.yaml`
- Memória evolutiva: `_memory/`
