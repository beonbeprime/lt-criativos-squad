# Proibições

Lista de elementos que nunca devem aparecer em nenhum criativo low ticket.
Baseada em feedback direto e análise de criativos reprovados.

---

[2026-04-07] [GLOBAL] PROIBIDO: Usar a palavra "curso" para produto low ticket de método. Usar "método", "sistema", "guia" ou "material".

[2026-04-07] [GLOBAL] PROIBIDO: Garantia com asterisco e letrinhas miúdas no criativo. Se mencionar garantia, deve ser legível no tamanho da arte.

[2026-04-07] [GLOBAL] PROIBIDO: Fundo gradiente de azul para roxo (#4facfe → #00f2fe). Visual de template gratuito, sem personalidade de marca.

[2026-04-07] [GLOBAL] PROIBIDO: Mais de 2 fontes diferentes no mesmo criativo. Uma fonte com variações de peso é o suficiente.

[2026-04-07] [GLOBAL] PROIBIDO: Copy que menciona concorrentes pelo nome. Falar da dor do público, não atacar outros produtos.

[2026-04-07] [TIPOGRAFIA] PROIBIDO: Valor monetário quebrando de linha. "R$" na linha de cima e "67,00" na de baixo é erro crítico de layout. Todo elemento de preço deve ter white-space:nowrap no CSS.

[2026-04-07] [TIPOGRAFIA] PROIBIDO: Palavra órfã sozinha na última linha de título. Ajustar font-size ou max-width para distribuição proporcional. Usar text-wrap:balance em headlines.

[2026-04-07] [TIPOGRAFIA] PROIBIDO: Hifenização automática em títulos e copy. Aplicar hyphens:none e word-break:keep-all em todo elemento de texto principal.

[2026-04-07] [TEMPLATE] PROIBIDO: Renderizar template com variável {{HEADLINE}} ou {{SUBHEADLINE}} sem passar o valor --headline e --subheadline no comando do renderer. Resultado: campo vazio visível ou texto branco em fundo claro.

[2026-04-07] [PREÇO] PROIBIDO: Usar R$ 5.000,00 no campo --price do renderer. O campo --price é o preço do produto (R$ 67,00). O valor da mentoria (R$ 5.000,00) vai no copy/headline via --subheadline ou hardcoded no template.
