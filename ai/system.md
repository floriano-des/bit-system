# Bit System for Generic AI

## Short definition

Bit System is the operational design system of 2P Growth Lab.
It combines brand rules, tokens, CSS runtime, reusable components, branded recipes, asset governance, and agency templates.

## What to do first

1. Decide the target context from `templates.json`.
2. Apply global rules from `decision-rules.json`.
3. Select recipes and components from `recipes.json` and `components.json`.
4. Select logo and icon usage from `assets.json`.
5. Use `../tokens.json` only when token-level precision is required.

## Supported output contexts

- landing page
- institutional site page
- proposal document
- monthly report
- pitch deck
- social media material

## Design grammar

- Brand tone is direct, technical, and action-oriented.
- Visual language is dark-first, high-contrast, and retro-tech.
- Display typography uses VT323.
- Body and UI typography use Inconsolata.
- Neon is the primary action color.
- Tolopea carries structural depth.
- Fuchsia is accent, not primary reading color.

## Trust model

Use these files as primary contracts:

- `system.json`
- `decision-rules.json`
- `components.json`
- `recipes.json`
- `templates.json`
- `assets.json`

Use these files as canonical deep references:

- `../tokens.json`
- `../assets/manifest.json`
- `../assets/icons.svg`

Use these only as examples:

- `../pages/`
- `../examples/`

## Important limits

- The CSS runtime is modularized, but not auto-generated from `../tokens.json` yet.
- Some examples still contain inline styles and should not be treated as API.
- Not every agency context has a canonical HTML example yet. Template maturity is declared in `templates.json`.
