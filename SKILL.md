# SKILL · Bit System
## Guia de consumo para agentes de IA da 2P Growth Lab

Leia este arquivo antes de gerar qualquer peça, interface, HTML, CSS, copy ou seleção de asset usando o Bit System.

## 1. Ordem de leitura

Siga esta ordem:

1. `SKILL.md`
2. `ai/llms.txt`
3. `ai/index.md`
4. `ai/system.json`
5. `ai/decision-rules.json`
6. `ai/components.json`
7. `ai/recipes.json`
8. `ai/templates.json`
9. `ai/assets.json`
10. `docs/ai-guide.md`
11. `tokens.json`
12. `tokens.css`
13. `components.css`
14. `assets/manifest.json`
15. `pages/` e `examples/`, somente como referência visual

Regra crítica: não trate `pages/` e `examples/` como fonte de verdade estrutural. Eles são demonstração e material de referência.

## 2. Fonte de verdade por domínio

| Domínio | Arquivo canônico | Como usar |
|---|---|---|
| Pacote universal para IA | `ai/` | Usar como entrada rápida para modelos genéricos |
| Tokens | `tokens.json` | Ler a estrutura, temas, acessibilidade e relações |
| Runtime de tokens | `tokens.css` | Importar no HTML; ele distribui os módulos em `styles/` |
| Componentes e recipes | `components.css` | Importar no HTML; ele distribui os módulos de layout, componentes e recipes |
| Assets | `assets/manifest.json` | Escolher logos, símbolos e ícones por contexto |
| Ícones | `assets/icons.svg` | Confiar nos ids reais do sprite |

Observação: o CSS ainda não é gerado automaticamente a partir de `tokens.json`. Se houver conflito, trate `tokens.json` como contrato estrutural e valide o runtime em `styles/tokens-core.css`.

Regra adicional: se a IA for genérica e não estiver operando como agente de código, priorize `ai/*.json` antes de abrir CSS bruto.

## 3. Identidade da marca

| Campo | Valor |
|---|---|
| Nome completo | Dois Palitos Growth Lab |
| Nome curto | 2P Growth Lab |
| Tagline | O Player 2 do seu crescimento |
| Personalidade | Direta, técnica, desafiadora, irreverente |
| Estética | Retro-gamer nos acentos, limpa e legível na base |

## 4. Guardrails visuais

- Use `VT323` para headlines, números grandes e CTAs de marca.
- Use `Inconsolata` para corpo, labels e interface.
- Use no máximo 1 CTA neon principal por tela.
- Use tokens semânticos `--color-*` em componentes novos.
- Não consuma primitivos diretos em componentes novos, salvo manutenção explícita de legado.
- Prefira `data-theme="dark"` para site, landing e social.
- Prefira `data-theme="light"` para proposta, relatório e material editorial.

## 5. Tokens essenciais

### Cores de marca

| Uso | Token |
|---|---|
| CTA principal | `--brand-primary` |
| Hover/acento | `--brand-accent` |
| Cor estrutural | `--brand-deep` |
| Texto em dark | `--color-text` |
| Texto em light | `--color-text` com `data-theme="light"` |

### Tipografia

| Token | Uso |
|---|---|
| `--font-pixel` | VT323 |
| `--font-mono` | Inconsolata |
| `--fs-display` | Hero principal |
| `--fs-h1` | Headline principal |
| `--fs-body-lg` | Introdução |
| `--fs-body` | Corpo |
| `--fs-caption` | Labels |

### Espaçamento

Base de 4px:

```text
--space-1  = 4px
--space-2  = 8px
--space-3  = 12px
--space-4  = 16px
--space-6  = 24px
--space-8  = 32px
--space-12 = 48px
--space-16 = 64px
```

## 6. Setup mínimo

```html
<html lang="pt-BR" data-theme="dark">
<head>
  <link rel="stylesheet" href="tokens.css" />
  <link rel="stylesheet" href="components.css" />
</head>
```

## 7. Componentes principais

### Botões

```html
<button class="btn btn-primary btn-lg">PRESS START</button>
<button class="btn btn-ghost">Saiba mais</button>
<button class="btn btn-accent">Agendar call</button>
<button class="btn btn-whatsapp">Falar no WhatsApp</button>
```

### Cards e badges

```html
<div class="card">Conteúdo</div>
<div class="card card--brand">...</div>
<div class="card card--hover">...</div>

<span class="badge badge-brand">LIVE</span>
<span class="badge badge-success">+32% ROAS</span>
<span class="badge badge-accent">NOVO</span>
```

### Inputs e alerts

```html
<input class="input" type="email" placeholder="voce@empresa.com" />
<div class="alert alert-success"><strong>Checkpoint!</strong> Campanha ativada.</div>
```

## 8. Recipes disponíveis

Estes nomes devem ser usados exatamente assim:

- `.recipe-mission`
- `.recipe-boss-stats`
- `.recipe-save-point`
- `.recipe-player`
- `.recipe-console`
- `.recipe-ticker`

Exemplos:

```html
<div class="recipe-mission">
  <span class="recipe-mission__num">01</span>
  <h3 class="recipe-mission__title">Mídia Paga</h3>
  <p class="recipe-mission__body">Google, Meta, TikTok e LinkedIn gerenciados como um ecossistema.</p>
</div>
```

```html
<div class="recipe-player">
  <div class="recipe-player__stars">★★★★★</div>
  <p class="recipe-player__quote">"Em 90 dias, nosso CPA caiu 42%."</p>
  <div class="recipe-player__name">Marcelo Ribas</div>
</div>
```

## 9. Assets e logos

Consulte sempre `assets/manifest.json`.

Regras rápidas:

- Para header dark, use `logos.logo_full_v2.variants.neon`.
- Para proposta ou relatório light, use `logos.logo_full_v2.variants.black`.
- Para avatar e watermark, use `logos.symbol_v2_png.variants.neon`.
- Para favicon ou interface, use `logos.symbol_v2_svg`.
- Não abra material novo usando `lettering_v1_legacy`.

Para ícones, use sempre ids reais do sprite, como:

```html
<svg width="24" height="24" aria-hidden="true">
  <use href="assets/icons.svg#bs-arrow-right"></use>
</svg>
```

## 10. Tom de voz

Padrão:

- direto
- técnico
- com referência gamer quando fizer sentido
- sempre com próximo passo claro

Evite:

- buzzwords genéricas
- emojis
- corporativês
- texto sem CTA

## 11. Checklist antes de entregar

- [ ] Importei `tokens.css` e `components.css`
- [ ] Defini o tema no `<html>`
- [ ] Usei no máximo 1 CTA neon principal
- [ ] Usei `VT323` e `Inconsolata`
- [ ] Usei tokens semânticos em vez de primitivos diretos
- [ ] Consultei `assets/manifest.json` antes de escolher logos e ícones
- [ ] Usei ids reais do `assets/icons.svg`
- [ ] O texto termina com CTA ou pergunta direta

## 12. O que não assumir

- Não invente nome de recipe.
- Não invente id de ícone.
- Não invente arquivo de logo fora do manifest.
- Não trate contagens de componentes e recipes em páginas HTML como verdade estrutural.
- Não suponha que um exemplo com estilos inline represente a API oficial do sistema.
