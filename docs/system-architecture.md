# Arquitetura do Bit System

## Objetivo

O Bit System foi reorganizado para separar melhor contrato estrutural, runtime CSS, assets e documentação operacional.

## Fonte de verdade por domínio

| Domínio | Arquivo canônico | Observação |
|---|---|---|
| Tokens | `tokens.json` | Contrato estrutural |
| Runtime de tokens | `tokens.css` | Entrypoint público |
| Implementação de tokens | `styles/tokens-core.css` | Runtime modular |
| Base global | `styles/base.css` | Reset, tipografia utilitária, efeitos globais |
| Legado | `styles/legacy-aliases.css` | Alias mantidos por compatibilidade |
| Layout | `styles/layout.css` | Grid, container e stacks |
| Componentes | `styles/components-core.css` | Botões, cards, inputs, badges, alerts, navbar |
| Recipes | `styles/recipes.css` | Blocos compostos da marca |
| Responsividade | `styles/responsive.css` | Ajustes de breakpoint |
| Assets | `assets/manifest.json` | Catálogo canônico |
| Ícones | `assets/icons.svg` | Implementação real dos ids |

## Entrypoints públicos

### `tokens.css`

Mantém compatibilidade com qualquer HTML antigo que já importava o arquivo original.

Ele importa:

- `styles/tokens-core.css`
- `styles/base.css`
- `styles/legacy-aliases.css`

### `components.css`

Mantém compatibilidade com qualquer HTML antigo que já importava o arquivo original.

Ele importa:

- `styles/layout.css`
- `styles/components-core.css`
- `styles/recipes.css`
- `styles/responsive.css`

## Regra de consumo

1. Componentes consomem tokens semânticos.
2. Páginas importam apenas `tokens.css` e `components.css`.
3. `pages/` e `examples/` servem como referência visual, não como contrato estrutural.
4. `assets/manifest.json` e `assets/icons.svg` precisam permanecer em sincronia.

## Limitação atual

`tokens.json` ainda não gera o CSS automaticamente. Nesta fase, ele funciona como contrato estrutural dos tokens, e `styles/tokens-core.css` é o espelho operacional que precisa ser mantido em sincronia.

## Próximo passo recomendado

Implementar um pipeline de geração para que `tokens.css` e `styles/tokens-core.css` passem a ser derivados automáticos de `tokens.json`.
