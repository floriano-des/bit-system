# Guia para IA

## Ordem de leitura

1. `SKILL.md`
2. `docs/ai-guide.md`
3. `tokens.json`
4. `tokens.css`
5. `components.css`
6. `assets/manifest.json`
7. `pages/` e `examples/`, se precisar de referência visual

## O que confiar

- Confie em `tokens.json` para nomes de tokens, temas, acessibilidade e relações.
- Confie em `assets/manifest.json` para escolha de logo, símbolo e ícone.
- Confie em `assets/icons.svg` para ids reais do sprite.
- Confie em `components.css` para nomes reais de classes.

## O que não confiar como contrato

- Contagens escritas manualmente em páginas HTML.
- Exemplos com estilos inline.
- Nomes históricos de arquivos ou recipes não presentes no CSS atual.

## Regras operacionais

- Use `VT323` apenas para display.
- Use `Inconsolata` para corpo e UI.
- Use no máximo 1 CTA neon por tela.
- Em tema light, priorize contraste e use texto estrutural em tolopea ou neutral escuro.
- Não abra peça nova com assets marcados como `legacy`.

## Uso de assets

- Site e landing dark: `logo_full_v2.neon`
- Proposta e relatório light: `logo_full_v2.black`
- Avatar, watermark e peça compacta: `symbol_v2_png.neon`
- Favicon e interface: `symbol_v2_svg`

## Uso de ícones

Sempre referencie o sprite com ids reais:

```html
<svg width="24" height="24" aria-hidden="true">
  <use href="assets/icons.svg#bs-target"></use>
</svg>
```

## Recipes reais

Use somente estas classes:

- `recipe-mission`
- `recipe-boss-stats`
- `recipe-save-point`
- `recipe-player`
- `recipe-console`
- `recipe-ticker`

## Checklist rápido

- Tema definido no `<html>`
- Tokens semânticos usados
- Recipe certo para o contexto
- Asset escolhido a partir do manifest
- Ícone referenciado com id real do sprite
- CTA final explícito
