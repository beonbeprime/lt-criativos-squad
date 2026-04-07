# Especificacoes de Formato - LT Criativos

## STATUS: SEMPRE ATIVO - Aplicar em toda geracao de imagem do squad

---

## Formato Story/Reels (formato principal)

| Spec | Valor |
|------|-------|
| Largura | 1080 px |
| Altura | 1920 px |
| Relacao | 9:16 vertical |
| Resolucao | 72-96 dpi (digital) |
| Formato de arquivo | PNG (sem compressao) |

### Safe Zone (CRITICA - nunca violar)

- Area segura para texto e elementos: topo ate Y=1280 (66% da altura)
- Zona proibida: Y > 1280 px - ZERO texto, ZERO elementos importantes
- Margem lateral minima: 60 px de cada lado
- Margem superior minima: 80 px do topo

Motivo da safe zone: a area inferior do Story e ocupada pela UI do Instagram e Reels:
- Perfil e nome do anunciante
- Botoes de curtir, comentar e compartilhar
- CTA do anuncio (botao "Saiba mais" ou similar)
- Barra de progresso do Story

Qualquer elemento colocado nessa area fica 100% encoberto pelo Instagram.

### Posicionamento do Texto no Story

```
[80px margem topo]
[AREA DE TEXTO E ELEMENTOS - Y: 80 a 1280]
  - H1 centralizado horizontalmente
  - Accent logo abaixo do H1
  - Ancora de valor no meio
  - Preco em destaque
  - CTA no terco medio-inferior desta area (max Y=1180)
[SAFE ZONE - Y: 1280 a 1920 - COMPLETAMENTE LIMPA]
```

---

## Formato Feed (derivado do Story)

| Spec | Valor |
|------|-------|
| Largura | 1350 px |
| Altura | 1080 px |
| Relacao | 5:4 |
| Resolucao | 72-96 dpi (digital) |
| Formato de arquivo | PNG (sem compressao) |

### Metodo de Corte Inteligente

O Feed NAO usa corte fixo no centro. O agente safe-area-detector analisa:

1. Posicao do rosto da pessoa (se houver) - margem de 5% acima da cabeca
2. Posicao dos textos - nenhum texto pode ser cortado em nenhuma aresta
3. Elemento visual central - placa, billboard, lousa etc. devem estar completos
4. Area de interesse principal - o que o olhar seria atraido primeiro

Resultado: recorte que mantém o elemento mais importante centralizado ou no terco superior-esquerdo (regra dos tercos fotograficos).

### Posicionamento no Feed

- Texto e copy: metade ESQUERDA (x: 0 a 675)
- Pessoa ou elemento visual: metade DIREITA (x: 675 a 1350)
- Quando nao ha pessoa: centralizado com elementos flanqueando

---

## Prompt Lovart - Padrao Base

```
[CENA: descricao do fundo/ambiente] com [elemento central: placa/espaco de texto]
na area central superior, iluminacao dramatica profissional,
formato vertical 9:16, todo texto em portugues brasileiro,
terco inferior completamente limpo para overlay de UI,
[paleta de cores baseada no tema], qualidade fotografica realista, cinematografico 4K,
safe area inferior vazia
```

### Variaveis do Prompt por Tema

| Tema | [CENA] | [elemento central] | [paleta] |
|------|--------|-------------------|---------|
| Luxury/Clean | marmore branco com veios dourados | homem de terno cinza na direita | branco, dourado, bege |
| Dark Cinematic | fundo preto com circulo neon | neon vermelho atras da pessoa | preto, vermelho, branco |
| Dramatic/Fire | parede de concreto industrial | placa preta com borda de fogo | cinza, laranja, vermelho |
| Aspirational Luxury | bar de charutos, madeira escura | lousa de giz em cavalete | marrom, dourado, creme |
| Wealth/Money | fundo branco liso | notas de dolar voando | branco, verde, dourado |
| AI/Tech | ambiente futurista digital | interface tech holografica | azul escuro, roxo, neon |
| Lifestyle | cafeteria ou co-working limpo | profissional em ambiente agradavel | neutro, bege, branco |

### Instrucoes Obrigatorias em Todo Prompt

Sempre incluir no final do prompt:
- "terco inferior da imagem completamente vazio e limpo"
- "sem texto renderizado na imagem" (o texto e adicionado em pos-producao)
- "formato 9:16 vertical sem margens"
- "qualidade 4K fotografica"

Alternativa quando o campecao tiver texto na imagem:
- Descrever o texto como elemento visual dentro da placa/lousa
- Especificar a fonte e o estilo visual do texto como parte da cena

---

## Geracao via lovart-py

### Localizacao do Projeto

```
C:/Users/Pichau/Desktop/aios/lovart-py/
```

### Regra de Referencia (OBRIGATORIA)

Sempre usar --reference quando houver criativo aprovado como referencia visual.
Sem referencia, o Lovart inventa estilo proprio diferente dos campeoes.

```
python generate.py --prompt "..." --reference "caminho/campecao.png"
```

### Output

Os arquivos gerados vao para a pasta output/ com timestamp automatico.
O squad organiza em seguida na estrutura padrao de entrega.

---

## Organizacao de Arquivos de Saida

```
output/lt-criativos/
  {YYYY-MM-DD}/
    proxima-1/
      story_1080x1920.png
      feed_1350x1080.png
      briefing.md
    proxima-2/
      story_1080x1920.png
      feed_1350x1080.png
      briefing.md
    v1-cor-variante/
      story_1080x1920.png
      feed_1350x1080.png
      briefing.md
    v2-copy-variante/
      ...
    v3-copy-cor/
      ...
    v4-publico-especifico/
      ...
    v5-prova-social/
      ...
    v6-urgencia/
      ...
    v7-crenca-falsa/
      ...
    v8-viagem-louca/
      ...
    relatorio-batch.md
```

### relatorio-batch.md (gerado automaticamente)

Conteudo do relatorio por batch:

- Data de geracao
- Campecao base utilizado
- Padroes extraidos (visual + copy)
- 10 variacoes com justificativa de cada
- Prompts Lovart utilizados (para reproducao futura)
- Score de qualidade por criativo
- Recomendacao de ordem de teste no Meta Ads

---

## Regras de Nomenclatura de Arquivos

| Arquivo | Formato |
|---------|---------|
| Story | `story_1080x1920.png` |
| Feed | `feed_1350x1080.png` |
| Briefing | `briefing.md` |
| Relatorio de batch | `relatorio-batch.md` |
| Pasta por variacao | `{codigo-variacao}/` (ex: `v1-cor-variante/`) |
| Pasta por data | `{YYYY-MM-DD}/` |

---

## Checklist Tecnico Pre-Entrega

- [ ] Story: 1080x1920 confirmado
- [ ] Feed: 1350x1080 confirmado
- [ ] Terco inferior do Story limpo (Y > 1280 vazio)
- [ ] Texto nao cortado em nenhuma aresta do Feed
- [ ] Rosto ou elemento principal integro no Feed
- [ ] Arquivo em PNG sem compressao
- [ ] Pasta organizada no padrao de nomenclatura
- [ ] briefing.md presente em cada variacao
- [ ] relatorio-batch.md gerado

---

## Referencias

- Regras de copy e temas: `config/creative-rules.md`
- Padroes dos campeoes: `data/champion-patterns.yaml`
- Projeto lovart-py: `C:/Users/Pichau/Desktop/aios/lovart-py/`
