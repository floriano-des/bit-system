# SKILL · Bit System
## Guia de consumo para agentes de IA - 2P Growth Lab

> **Este arquivo é a entrada principal para qualquer IA que precise produzir peças visuais, textuais ou de código usando o Design System da 2P Growth Lab (Dois Palitos).** Leia-o completamente antes de gerar qualquer output.

---

## 1. IDENTIDADE DA MARCA

| Campo | Valor |
|---|---|
| **Nome completo** | Dois Palitos Growth Lab |
| **Nome curto** | 2P Growth Lab |
| **Tagline** | "O Player 2 do seu crescimento" |
| **Posicionamento** | Agência de marketing de performance que age como parceiro co-op, não como fornecedor. |
| **Personalidade** | Direta, técnica, desafiadora, irreverente. Usa metáforas de videogame para falar de resultado. |
| **Estética** | Retrô-gamer (8/16-bit) na voz e nos acentos visuais; limpa e legível na base. |

---

## 2. ARQUIVOS PRINCIPAIS

```
tokens.css          → FONTE DA VERDADE visual (cores, tipo, espaçamento, sombras)
tokens.json         → tokens em JSON estruturado - use este para leitura por IA
components.css      → componentes base + recipes prontos para uso
assets/manifest.json → catálogo de assets (logos, ícones) com metadados

pages/colors.html       → referência: paleta visual completa
pages/typography.html   → referência: tipografia e escala
pages/tokens.html       → referência: espaçamento, sombras, raios
pages/components.html   → referência: todos os componentes e estados
pages/recipes.html      → referência: composições assinadas 2P
pages/logos.html        → referência: logos e regras de uso
pages/voice.html        → referência: tom de voz e microcopy
pages/icons.html        → referência: biblioteca de ícones
```

---

## 3. PALETA DE CORES - QUICK REFERENCE

> Regra: componentes sempre consomem tokens semânticos (`--color-*`), nunca primitivos diretos.

### Cores primárias

| Nome | Token semântico | Hex | Uso principal |
|---|---|---|---|
| **Neon** | `--brand-primary` | `#00FFD1` | CTAs primários, destaques, bordas de foco |
| **Fúchsia** | `--brand-accent` | `#FF00FF` | Hover, badges, sombras de destaque |
| **Tolopea** | `--brand-deep` | `#2409A9` | Backgrounds estruturais, seções de respiro |
| **Preto de marca** | `--neutral-950` | `#100F0F` | Fundo dark (padrão) |
| **Branco de marca** | `--neutral-50` | `#FAFAFA` | Fundo light (relatórios, print) |

### Regras invioláveis de cor
- Nunca mais de **1 CTA neon por tela**. Segundo CTA usa `.btn-ghost` ou `.btn-accent`.
- Nunca neon sobre fúchsia - contraste insuficiente.
- Cores de feedback (`--color-success`, `--color-warning`, `--color-danger`) apenas para status - nunca decorativo.
- Em tema light, substituir neon por `--tolopea-800` em texto (contraste).

---

## 4. TIPOGRAFIA - QUICK REFERENCE

| Família | Uso | Import |
|---|---|---|
| **VT323** | Headlines, CTAs, números grandes, badges. Sempre caixa alta. | Google Fonts |
| **Inconsolata** | Corpo, UI, labels, captions, tudo que não é display. | Google Fonts |

```css
/* Import já incluído em tokens.css */
@import url('https://fonts.googleapis.com/css2-family=VT323&family=Inconsolata:wght@400;500;600;700;800;900&display=swap');
```

### Escala (tokens)

| Token | Tamanho | Família | Uso |
|---|---|---|---|
| `--fs-display` | 96px | VT323 | Hero principal, números-assinatura |
| `--fs-h1` | 64px | VT323 | Títulos de seção hero |
| `--fs-h2` | 48px | VT323 | Subtítulos de seção |
| `--fs-h3` | 32px | Inconsolata 700 | Título de card |
| `--fs-h4` | 24px | Inconsolata 700 | Subtítulo de card |
| `--fs-body-lg` | 18px | Inconsolata | Intro/lead |
| `--fs-body` | 16px | Inconsolata | Corpo padrão |
| `--fs-caption` | 12px | Inconsolata 600 | Labels, overlines |

### Proibições tipográficas
- ❌ VT323 em minúsculas ou corpo de texto
- ❌ Qualquer fonte além de VT323 e Inconsolata
- ❌ Itálico em VT323 (a fonte não tem)
- ❌ VT323 abaixo de 24px (vira ilegível)

---

## 5. ESPAÇAMENTO

Base: **4px**. Tokens nomeados por múltiplo:

```
--space-1  =  4px    --space-8  = 32px
--space-2  =  8px    --space-10 = 40px
--space-3  = 12px    --space-12 = 48px
--space-4  = 16px    --space-16 = 64px
--space-5  = 20px    --space-20 = 80px
--space-6  = 24px    --space-24 = 96px
```

---

## 6. COMPONENTES - COMO USAR

### Setup mínimo para qualquer HTML
```html
<html lang="pt-BR" data-theme="dark">
<head>
  <link rel="stylesheet" href="tokens.css" />
  <link rel="stylesheet" href="components.css" />
</head>
```

Use `data-theme="light"` para relatórios, propostas e PDFs.

### Botões

```html
<!-- CTA principal (só 1 por tela) -->
<button class="btn btn-primary btn-lg">PRESS START</button>

<!-- CTA secundário -->
<button class="btn btn-ghost">Saiba mais</button>

<!-- Destaque accent (hover states, variações) -->
<button class="btn btn-accent">Agendar Call</button>

<!-- WhatsApp -->
<button class="btn btn-whatsapp">Falar no WhatsApp</button>

<!-- Estado disabled -->
<button class="btn btn-primary" disabled>Indisponível</button>

<!-- Estado loading -->
<button class="btn btn-primary" data-loading>Carregando</button>

<!-- Tamanhos: btn-sm | btn (default) | btn-lg | btn-xl (pixel, 28px VT323) -->
```

### Cards

```html
<!-- Card base -->
<div class="card">Conteúdo</div>

<!-- Card com sombra neon (destaque) -->
<div class="card card--brand">...</div>

<!-- Card com hover interativo -->
<div class="card card--hover">...</div>
```

### Badges

```html
<span class="badge badge-brand">LIVE</span>
<span class="badge badge-success">+32% ROAS</span>
<span class="badge badge-accent">NOVO</span>
<span class="badge badge-live">AO VIVO</span>  <!-- pisca -->
```

### Inputs

```html
<label class="label">Email</label>
<input class="input" type="email" placeholder="seu@email.com" />
<span class="field-help">Texto de ajuda abaixo do campo</span>

<!-- Estado de erro -->
<input class="input" aria-invalid="true" />
<span class="field-error">Campo obrigatório</span>
```

### Alerts

```html
<div class="alert alert-success"><strong>Checkpoint!</strong> Campanha ativada.</div>
<div class="alert alert-danger"><strong>Erro!</strong> Verifique o orçamento.</div>
<div class="alert alert-warning"><strong>Atenção.</strong> CAC subiu 12%.</div>
```

### Accordion (FAQ)

```html
<details class="accordion">
  <summary>Qual o prazo de entrega dos resultados-</summary>
  <div class="accordion-body">Resposta aqui.</div>
</details>
```

---

## 7. RECIPES - COMPOSIÇÕES ASSINADAS 2P

Recipes são blocos compostos com a assinatura visual da marca. Use-os em vez de construir do zero.

### Mission Card (features, serviços)
```html
<div class="recipe-mission">
  <span class="recipe-mission__num">01</span>
  <h3 class="recipe-mission__title">Mídia Paga</h3>
  <p class="recipe-mission__body">Google, Meta, TikTok e LinkedIn gerenciados como um só ecossistema.</p>
  <a class="recipe-mission__link" href="#">Saiba mais →</a>
</div>
```

### Boss Stats (métricas grandes)
```html
<div class="recipe-boss-stats">
  <div class="recipe-boss-stats__label">ROAS médio</div>
  <div class="recipe-boss-stats__value">+320%</div>
  <div class="recipe-boss-stats__delta">↑ vs mês anterior</div>
</div>
```

### Save Point (CTA/banner principal)
```html
<section class="recipe-save-point">
  <h2>PRONTO PRA JOGAR-</h2>
  <p>Seu próximo nível começa com uma conversa. Sem enrolação, sem proposta genérica.</p>
  <a class="btn btn-xl" href="#">INSERT COIN →</a>
</section>
```

### Console (elemento visual de marca)
```html
<div class="recipe-console">
  <div class="recipe-console__line"><span class="recipe-console__prompt">></span> bit-system --status</div>
  <div class="recipe-console__line"><span class="recipe-console__prompt">$</span> roas = <span class="recipe-console__value">+320%</span></div>
  <div class="recipe-console__line"><span class="recipe-console__prompt">></span> ready_<span class="fx-cursor"></span></div>
</div>
```

### Player Card (depoimento/case)
```html
<div class="recipe-player-card">
  <div class="recipe-player-card__score">HIGH SCORE</div>
  <blockquote class="recipe-player-card__quote">"Em 90 dias, nosso CPA caiu 42%."</blockquote>
  <div class="recipe-player-card__name">Marcelo Ribas · CMO · Acme Logística</div>
</div>
```

---

## 8. LAYOUT E GRID

```html
<!-- Container centralizado -->
<div class="bs-container">...</div>     <!-- max 1200px -->
<div class="bs-container-xl">...</div>  <!-- max 1440px -->

<!-- Layouts -->
<div class="bs-grid-2">...</div>  <!-- 2 colunas -->
<div class="bs-grid-3">...</div>  <!-- 3 colunas -->
<div class="bs-grid-4">...</div>  <!-- 4 colunas -->

<!-- Stack vertical -->
<div class="bs-stack">...</div>     <!-- gap 16px -->
<div class="bs-stack-lg">...</div>  <!-- gap 32px -->

<!-- Row horizontal -->
<div class="bs-row">...</div>  <!-- flex, gap 16px, wrap -->
```

---

## 9. EFEITOS VISUAIS DE MARCA

```html
<!-- Scanlines (sobreposição CRT) -->
<div class="fx-scanlines">...</div>

<!-- Cursor piscante (após qualquer elemento) -->
<span class="fx-cursor"></span>

<!-- Imagem pixelada -->
<img class="fx-pixelate" src="..." />
```

---

## 10. TOM DE VOZ - QUICK REFERENCE

### Fórmulas de headline aprovadas

| Tipo | Exemplo |
|---|---|
| Comando pixel (VT323) | `PRESS START TO LEVEL UP` |
| Oposição | `AGÊNCIA COMUM É MODO FÁCIL. NÓS JOGAMOS NO HARDCORE.` |
| Métrica + metáfora | `+320% DE ROAS. NOVO HIGH SCORE DESBLOQUEADO.` |
| Benefício direto | `SEU FUNIL NO HARD MODE. SEM MEDO.` |

### Glossário gamer (use à vontade)

| Termo | Significado no contexto 2P |
|---|---|
| START | CTA inicial, começo de conversa |
| CHECKPOINT | Entrega concluída, marco |
| LEVEL UP | Crescimento, evolução de métrica |
| POWER-UP | Serviço adicional, otimização |
| BOSS | Desafio grande, cliente grande |
| SAVE GAME | Relatório, case publicado |
| GAME OVER | Projeto finalizado |
| 2P / PLAYER 2 | A agência (parceiro co-op do cliente) |
| INSERT COIN | Primeiro investimento, início do projeto |
| HUD | Painel/dashboard |
| HIGH SCORE | Melhor resultado, recorde de campanha |
| RESPAWN | Retomada após teste ruim |

### O que evitar
- ❌ "Soluções inovadoras e estratégicas"
- ❌ Emojis (o sistema visual é pixel, não emoji)
- ❌ "Unleash your potential", "synergy", "disruptive"
- ❌ Formalidade de e-mail corporativo ("att.", "segue em anexo")
- ❌ Texto sem CTA ou próxima ação ao final

---

## 11. LOGOS - COMO ESCOLHER

| Arquivo | Fundo recomendado | Uso |
|---|---|---|
| `logo-lettering-neon.png` | Preto (`#100F0F`) | Padrão digital, dark |
| `logo-lettering-black.png` | Branco/claro | Documentos, print light |
| `logo-lettering-white.png` | Cores vivas (neon, fúchsia) | Sobre backgrounds coloridos |
| `logo-lettering-tolopea.png` | Neon (`#00FFD1`) | Banners, headers coloridos |
| `logo-lettering-fuchsia.png` | Preto | Variações de destaque |
| `logo-symbol.svg` | Qualquer | Ícone compacto, favicon, avatars |

> Clearspace mínimo: altura da letra "d" do lettering em todos os lados.

Ver catálogo completo: `assets/manifest.json`

---

## 12. CHECKLIST ANTES DE ENTREGAR UMA PEÇA

- [ ] Importei `tokens.css` e `components.css`-
- [ ] Defini `data-theme="dark"` ou `"light"` no `<html>`-
- [ ] Há no máximo 1 CTA neon primário por tela-
- [ ] Usei apenas VT323 e Inconsolata-
- [ ] VT323 está em caixa alta em todos os usos-
- [ ] Cores de feedback apenas para status (não decorativo)-
- [ ] O copy termina com CTA ou pergunta direta-
- [ ] Usei tokens semânticos (`--color-*`) - não primitivos diretos-
- [ ] Testei em dark e light se a peça precisa dos dois-

---

## 13. EXEMPLOS DE USO RÁPIDO

### Seção de hero mínima
```html
<section style="background: var(--neutral-950); padding: var(--space-24) var(--space-8);">
  <div class="bs-container">
    <span class="badge badge-brand">PLAYER 2 MODE</span>
    <h1 class="t-display" style="color: var(--brand-primary); text-shadow: 4px 4px 0 var(--brand-accent);">
      PRESS START<br>TO GROW
    </h1>
    <p class="t-body-lg c-muted">Performance, criativo e mídia paga num só co-op.</p>
    <div class="bs-row">
      <a class="btn btn-primary btn-lg" href="#">INSERT COIN →</a>
      <a class="btn btn-ghost btn-lg" href="#">Ver cases</a>
    </div>
  </div>
</section>
```

### Card de métrica
```html
<div class="recipe-boss-stats">
  <div class="recipe-boss-stats__label">CPA médio dos clientes</div>
  <div class="recipe-boss-stats__value">-38%</div>
  <div class="recipe-boss-stats__delta">↓ vs agência anterior</div>
</div>
```

### Seção CTA final
```html
<section class="recipe-save-point">
  <h2>CHECKPOINT DESBLOQUEADO.</h2>
  <p>Você chegou até aqui. O próximo nível é uma conversa.</p>
  <a class="btn btn-xl" href="https://wa.me/55..." style="background: var(--neutral-950); color: var(--brand-primary);">
    FALAR COM A 2P →
  </a>
</section>
```

---

*Bit System v2.0 · 2P Growth Lab · Atualizado em 2026-04-18*
*Para dúvidas sobre o sistema: contato@doispalitosmkt.com.br*
