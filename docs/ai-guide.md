# Guia para IA

## Ordem de leitura

1. `SKILL.md`
2. `ai/llms.txt`
3. `ai/index.md`
4. `ai/system.json`
5. `ai/decision-rules.json`
6. `ai/components.json`
7. `ai/recipes.json`
8. `ai/templates.json`
9. `ai/assets.json`
10. `tokens.json`
11. `assets/manifest.json`
12. `pages/` e `examples/`, se precisar de referência visual

## O que confiar

- Confie em `tokens.json` para nomes de tokens, temas, acessibilidade e relações.
- Confie em `ai/*.json` para leitura rápida e interoperável por modelos genéricos.
- Confie em `assets/manifest.json` para escolha de logo, símbolo e ícone.
- Confie em `assets/icons.svg` para ids reais do sprite.
- Confie em `components.css` para nomes reais de classes.

## O que não confiar como contrato

- Contagens escritas manualmente em páginas HTML.
- Exemplos com estilos inline.
- Nomes históricos de arquivos ou recipes não presentes no CSS atual.
- Qualquer página de showcase como se fosse contrato canônico.

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

## Pacote universal para IA

Use `ai/` quando a IA:

- não conhece o repositório
- trabalha melhor com Markdown e JSON do que com CSS
- precisa de trust order explícita
- vai alimentar RAG, automação, deck builder ou gerador genérico

## Checklist rápido

- Tema definido no `<html>`
- Tokens semânticos usados
- Recipe certo para o contexto
- Asset escolhido a partir do manifest
- Ícone referenciado com id real do sprite
- CTA final explícito
