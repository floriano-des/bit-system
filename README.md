# Bit System - 2P Growth Lab

Design System oficial da **Dois Palitos Growth Lab** (2P Growth Lab) - uma
agência de marketing de performance que se posiciona como *laboratório de
crescimento* e não como "agência padrão". A identidade visual é inspirada em
consoles de videogame 8/16-bit e pixel art: START, CHECKPOINT, SAVE GAME,
scanlines, fosforescência neon.

Este design system foi portado de um arquivo Figma ("Bit System") para HTML/CSS
limpo, pronto para uso em landing pages, decks comerciais, relatórios mensais,
posts de redes sociais, propostas e qualquer peça digital da 2P.

---

## CONTENT FUNDAMENTALS

### Voz e tom

- **Direta, desafiadora, sem enrolação.** A 2P se compara a um jogador que
  *não morre no primeiro chefão*. Frases como "SEM MEDO DE PERDER A PARTIDA"
  e "INSERT COIN TO START" são bem-vindas em headlines.
- **Informal, mas técnica.** Fale de ROAS, CAC, CPA, funil, LTV - sem medo
  do jargão. Mas traduza com metáforas de videogame quando possível:
  *"seu funil está no modo fácil"*, *"vamos subir de level"*.
- **Brasileira.** Português do Brasil, tom paulistano. Gírias moderadas são
  permitidas ("meio-mundo", "da hora", "fala sério"). Evite "ass. atte."
  e outros formalismos de e-mail corporativo.
- **Sempre aponta para ação.** Todo bloco de texto termina em um CTA ou em
  uma pergunta direta. Não deixe o leitor sem próximo passo.

### Glossário de termos 2P (use à vontade)

| Termo gamer | O que significa no contexto 2P |
|---|---|
| **START** | CTA inicial (começar uma conversa, um projeto) |
| **CHECKPOINT** | Marco / entrega / etapa concluída |
| **SAVE GAME** | Relatório, case salvo, material pronto |
| **LEVEL UP** | Crescimento, evolução de métrica, novo ciclo |
| **POWER-UP** | Serviço adicional, otimização, feature |
| **BOSS** | Desafio grande (cliente grande, campanha complexa) |
| **RESPAWN** | Retomada, recomeço após teste ruim |
| **GAME OVER** | Campanha encerrada, projeto finalizado |
| **2P (Player 2)** | A agência é o "jogador 2" - o parceiro de co-op do cliente |
| **CO-OP** | Parceria, trabalho conjunto |
| **HUD** | Painel / dashboard do cliente |
| **INSERT COIN** | Primeiro investimento, começo do projeto |
| **HIGH SCORE** | Melhor mês, recorde de resultado |

### Headline framework

**Fórmula 1 - comando direto em caixa alta (VT323):**
> PRESS START TO LEVEL UP
> INSIRA FICHA. VAMOS JOGAR.
> CHECKPOINT DESBLOQUEADO.

**Fórmula 2 - oposição (o outro é o jogo fácil, a 2P é o hard mode):**
> AGÊNCIA COMUM É MODO FÁCIL. NÓS JOGAMOS NO HARDCORE.

**Fórmula 3 - métrica com metáfora gamer:**
> +320% DE ROAS. NOVO HIGH SCORE DESBLOQUEADO.

### O que evitar

- "Soluções inovadoras e estratégicas" - genérico de agência padrão.
- Emojis (o ícone visual é o pixel, não o emoji).
- "Parceiros" soltos sem contexto - use "co-op" ou "player 2".
- Gradientes complexos de 4+ cores em textos.
- "Unleash your potential", "synergy", "disruptive" e outro corporativês traduzido.

---

## VISUAL FOUNDATIONS

### Princípios visuais

1. **Retrô-gamer nos acentos, moderno na base.** O sistema NÃO é 100% pixel art -
   a base é limpa (Poppins, Inconsolata, espaçamento generoso). O pixel entra
   nos CTAs (VT323 32px em botões), badges, headlines-punch e elementos de marca.
2. **Alto contraste sempre.** Verde neon em preto é a assinatura. Acessibilidade
   AA é o mínimo; busque AAA em texto sobre neon.
3. **Sombras sólidas, nunca difusas.** Sombras são `offset + 0 blur` em neon ou
   fúchsia. Nunca `box-shadow` com blur difuso estilo Material.
4. **Cantos retos ou levemente arredondados.** Radius 0 ou 2–8px. Nada de pill
   buttons gigantes.
5. **Tipografia como personagem.** VT323 é a voz da marca em headlines e CTAs.
   Não substitua por outra fonte pixel.

### Paleta resumida

- **Primary / Neon** `#00FFD1` (rgb 0,255,209) - CTAs principais, destaques.
- **Accent / Fuchsia** `#FF00FF` - hover states, acentos, personalidade.
- **Secondary / Tolopea** `#2409A9` - backgrounds estruturais, títulos.
- **Neutral Black** `#100F0F` (16,15,15) - fundo principal do dark theme.
- **Neutral White** `#FAFAFA` - fundo principal do light theme.
- **Feedback** success `#4CFF4C`, warning `#FFD54C`, error `#FF7C71`.

Escala completa em `tokens.css` e nas páginas de preview.

### Tipografia resumida

- **Headlines pixel (punch)**: VT323 - use em CTAs, números grandes,
  headlines-assinatura. Sempre caixa alta. Tamanhos: 24, 32, 48, 64, 104px.
- **Headlines & labels**: Poppins Bold/SemiBold - títulos de seção, labels
  de UI, navegação. Inter SemiBold é a alternativa.
- **Body**: Inconsolata (monoespaçada) 16–18px para textos longos, caption,
  metadata. Poppins Regular como alternativa para textos mais institucionais.
- **Download das fontes**: Google Fonts (VT323, Inconsolata, Poppins, Inter).

### Espaçamento

Escala baseada em 4px. Tokens: `spacing-none`, `spacing-xs` (4), `spacing-sm` (8),
`spacing-md` (12), `spacing-lg` (16), `spacing-xl` (20), `spacing-2xl` (24),
`spacing-3xl` (32), `spacing-4xl` (40), `spacing-5xl` (48), `spacing-6xl` (56),
`spacing-7xl` (64).

### Bordas e raios

- **Border widths**: 1.5px (fino), 2px (padrão), 4px, 8px, 12px, 16px, 20px.
- **Radius**: 2, 4, 8, 12, 16, 100% (pill). **Padrão: 0** em botões CTA (retangular
  é mais retrô); 8–12px em cards.

### Sombras

Apenas duas, ambas sólidas, offset `5px 5px 0`:
- **Shadow Green** `5px 5px 0 #00FFD1` - cards primários.
- **Shadow Fuchsia** `5px 5px 0 #FF00FF` - cards de destaque, CTAs.

### Grid

12 colunas, gutter 24px, margem 120px no desktop (1440). Mobile: 4 colunas,
gutter 16px, margem 24px.

---

## Estrutura dos arquivos

```
tokens.css              → design tokens (cores, tipo, espaçamento, sombras, bordas)
components.css          → componentes base (botões, cards, inputs, badges, etc.)

index.html              → hub do design system (console retrô)
pages/
  colors.html           → paleta completa
  typography.html       → tipografia + exemplos
  tokens.html           → espaçamento, bordas, sombras, tamanhos
  logos.html            → logos e marca
  icons.html            → biblioteca de ícones
  components.html       → botões, inputs, checkboxes, cards, accordions
  sections.html         → navbar, hero, CTA, FAQ, footer

examples/
  landing-page.html     → exemplo completo de landing
  deck-comercial.html   → deck de pitch comercial
  post-instagram.html   → carrossel de post

assets/                 → logos, ícones, imagens

SKILL.md                → instruções para agentes reutilizarem este DS
README.md               → este arquivo
```

## Começando

1. Abra `index.html` no navegador - hub principal.
2. Para construir algo novo, importe `tokens.css` e `components.css` e siga
   os padrões das páginas em `examples/`.
3. Consulte `SKILL.md` se for um agente automatizado produzindo peças.
