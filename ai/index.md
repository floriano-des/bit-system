# Bit System AI Entry

Use this folder as the AI-friendly entrypoint to the Bit System.

## Read in this order

1. [system.md](./system.md)
2. [system.json](./system.json)
3. [decision-rules.json](./decision-rules.json)
4. [components.json](./components.json)
5. [recipes.json](./recipes.json)
6. [templates.json](./templates.json)
7. [assets.json](./assets.json)
8. [../tokens.json](../tokens.json)
9. [../assets/manifest.json](../assets/manifest.json)

## What this package solves

This package reduces ambiguity for generic AI systems by exposing:

- a trust order
- compact machine-readable contracts
- explicit operating rules
- supported contexts and maturity
- condensed asset guidance

## Source precedence

If files disagree, use this precedence:

1. `ai/*.json`
2. `../tokens.json`
3. `../assets/manifest.json`
4. `../tokens.css` and `../components.css`
5. `../SKILL.md` and `../docs/ai-guide.md`
6. `../pages/` and `../examples/`

## Scope

This package is optimized for:

- general LLMs
- presentation AI
- coding agents
- workflow automations
- retrieval and RAG pipelines

It is not tied to one vendor.
