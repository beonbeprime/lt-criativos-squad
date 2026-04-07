# Task 13 - Direção Visual

## Objetivo

Definir a linguagem visual de cada criativo antes da geração.
Template, paleta, hierarquia tipográfica e composição são definidos aqui.
Nunca gerar criativo sem direção visual aprovada.

---

## Camada no pipeline

Posição: Camada 5 (executa após estratégia de mensagem da Task 12, antes da geração 3x da Task 14)

---

## Agentes ativados

| Agente | Papel |
|--------|-------|
| `lt-visual-director` | Coordena a direção visual completa |
| `lt-template-selector` | Seleciona o template mais adequado ao nicho e mensagem |
| `lt-palette-generator` | Define a paleta de cores e accent_color |
| `lt-typography-chief` | Valida hierarquia tipográfica e legibilidade |

---

## Inputs necessários

Recebidos da Task 12 (estratégia de mensagem):
- Nicho e tom da mensagem
- Nível de consciência do público
- Tipo de gancho escolhido para a headline

Consultados da pasta `_memory/`:
- `visual-preferences.md` - padrões visuais aprovados
- `approved-patterns.md` - combinações que funcionaram bem
- `niche-learnings.md` - preferências visuais por nicho

---

## Processo passo a passo

### Passo 1: Seleção do template

O `lt-template-selector` escolhe o template usando esta matriz:

| Nicho / Tom | Template indicado |
|-------------|------------------|
| Empreendedorismo, método, resultado | `dark-cinematic` |
| Luxo, premium, feminino, lifestyle | `white-marble` |
| Urgência, desconto, prazo, agressivo | `fire-impact` |
| Coaching, autoridade, editorial | `luxury-minimal` |
| Tecnologia, IA, digital, futurismo | `neon-urban` |

Se o nicho não se encaixar claramente: o `lt-visual-director` decide por analogia de tom.

### Passo 2: Definição da paleta

O `lt-palette-generator` define:
- `accent_color`: cor principal de destaque (usada em headline, preço e CTA)
- `bg_color`: ajuste do fundo (se o template permitir variação)

Regras de paleta:
- Máximo 3 cores no criativo (incluindo branco e preto como neutros)
- A `accent_color` deve ter contraste mínimo 4.5:1 com o fundo para texto
- Consultar `visual-preferences.md` para evitar combinações já reprovadas

### Passo 3: Validação tipográfica

O `lt-typography-chief` valida:
- Hierarquia: headline > subheadline > preço > CTA visualmente clara
- Tamanho mínimo: headline 62px, subheadline 32px, CTA 34px
- Legibilidade em tela de celular (simular 375px de largura proporcional)
- Nenhum texto abaixo de Y=1280px (safe zone do Instagram)

### Passo 4: Briefing visual final

O `lt-visual-director` consolida um briefing visual com:
- Template selecionado + justificativa
- accent_color em hex + bg_color em hex
- Instrução especial de composição (se necessário)
- Estimativa de score visual esperado (0-100)

---

## Outputs esperados

Briefing visual contendo:
1. Template selecionado (com justificativa de 1 linha)
2. Paleta: accent_color e bg_color em hex
3. Validação tipográfica (aprovado/ajuste necessário)
4. Instruções específicas para a geração
5. Score visual estimado

---

## Critérios de aprovação

- Template escolhido é coerente com o tom da mensagem definida na Task 12
- accent_color passa no teste de contraste mínimo
- Nenhum elemento previsto cruza o safe zone (Y > 1280px)
- Combinação de template + cor não consta em `_memory/rejected-patterns.md`
