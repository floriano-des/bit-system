# Bit System

Design System interno da 2P Growth Lab.

O Bit System não é só uma biblioteca de componentes. Ele organiza linguagem de marca, tokens, componentes CSS, recipes, templates e assets para uso em site, landing page, proposta comercial, relatório, pitch deck e social media.

## O que é canônico

Cada domínio do sistema tem uma fonte de verdade própria:

| Domínio | Arquivo canônico | Papel operacional |
|---|---|---|
| Tokens | `tokens.json` | Contrato estrutural dos tokens |
| Runtime de tokens | `tokens.css` | Entrypoint público que importa os módulos em `styles/` |
| Componentes e recipes | `components.css` | Entrypoint público para o CSS de UI |
| Assets | `assets/manifest.json` | Catálogo canônico de logos, símbolos e ícones |
| Sprite de ícones | `assets/icons.svg` | Implementação real dos ids de ícones |
| Pacote genérico para IA | `ai/` | Camada universal para modelos, automações e RAG |
| Instruções para IA | `SKILL.md` | Ordem de leitura e guardrails para agentes |
| Onboarding humano | `README.md` e `docs/` | Visão geral, arquitetura e governança |

Observação importante: nesta fase, `tokens.json` é a referência estrutural dos tokens, mas o CSS ainda não é gerado automaticamente. Mudanças em tokens devem ser refletidas também em `styles/tokens-core.css`.

## Estrutura

```text
tokens.css
components.css
tokens.json
SKILL.md
index.html

styles/
  tokens-core.css
  base.css
  legacy-aliases.css
  layout.css
  components-core.css
  recipes.css
  responsive.css

pages/
examples/
assets/
ai/
docs/
scripts/
```

## Como começar

1. Abra `index.html` para navegar pelo sistema.
2. Importe `tokens.css` e `components.css` em qualquer HTML novo.
3. Defina `data-theme="dark"` ou `data-theme="light"` no elemento `<html>`.
4. Consulte `pages/recipes.html` antes de construir blocos do zero.
5. Consulte `assets/manifest.json` antes de escolher logos ou ícones.

Setup mínimo:

```html
<html lang="pt-BR" data-theme="dark">
<head>
  <link rel="stylesheet" href="tokens.css" />
  <link rel="stylesheet" href="components.css" />
</head>
```

## Temas e tipografia

- Tema padrão: `dark`
- Tema alternativo: `light`, para propostas, relatórios e materiais mais editoriais
- Display: `VT323`
- Texto e interface: `Inconsolata`
- Download oficial das fontes: [VT323](https://fonts.google.com/specimen/VT323) e [Inconsolata](https://fonts.google.com/specimen/Inconsolata)

As decisões de contraste, foco e uso por contexto ficam em `tokens.json` e no CSS modular em `styles/`.

## Documentação

- `ai/`: pacote de distribuição para IA genérica
- `docs/system-architecture.md`: fronteiras, fonte de verdade e responsabilidades
- `docs/ai-guide.md`: ordem de leitura e regras de consumo por agentes
- `docs/governance.md`: release checklist, deprecações e manutenção

## Validação

Rode o validador local antes de publicar mudanças estruturais:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate-bit-system.ps1
```

Ele valida:

- JSON do manifest
- existência dos assets referenciados
- ids de ícones declarados no manifest
- correspondência com `assets/icons.svg`

Para validar o pacote de IA:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate-ai-package.ps1
```

## Princípios operacionais

- Componentes devem consumir tokens semânticos, não primitivos diretos.
- Assets v2 são o padrão. Assets v1 ficam isolados como legado.
- PNG é o formato operacional padrão para peças da agência.
- SVG é usado quando o contexto exige escala vetorial ou integração técnica.
- Recipes existem para acelerar produção com consistência. Use-os antes de abrir exceções.

## Limitações atuais

- Ainda não existe pipeline para gerar CSS automaticamente a partir de `tokens.json`.
- Alguns exemplos em `examples/` ainda usam estilos inline e precisam de refino adicional para virarem templates parametrizáveis.
- O sprite de ícones está consolidado, mas o catálogo histórico tinha ids legados que agora foram explicitamente mapeados ou marcados como obsoletos.
