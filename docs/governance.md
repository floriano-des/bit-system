# Governança do Bit System

## Objetivo

Reduzir deriva entre documentação, tokens, CSS e assets.

## Regras de mudança

1. Alterações em tokens exigem revisão em `tokens.json` e `styles/tokens-core.css`.
2. Alterações em ícones exigem revisão em `assets/icons.svg` e `assets/manifest.json`.
3. Alterações em recipes exigem revisão em `styles/recipes.css`, `SKILL.md` e páginas de referência relevantes.
4. Alterações de branding exigem revisão de logos, manifest, páginas de marca e exemplos impactados.

## Checklist de release

- [ ] `assets/manifest.json` abre sem erro
- [ ] Todos os `path` do manifest existem
- [ ] Todos os ids de ícone do manifest existem em `assets/icons.svg`
- [ ] `README.md`, `SKILL.md` e `docs/` refletem a estrutura real
- [ ] Nomes de recipes em documentação batem com o CSS
- [ ] Assets novos ou removidos foram marcados como `current`, `legacy` ou `deprecated`

## Deprecações

Use este padrão:

- `current`: padrão para novos materiais
- `legacy`: manter apenas por compatibilidade
- `deprecated`: não usar; preparar remoção

Regras:

1. Não remover um asset ou nome histórico sem antes marcar como `deprecated`.
2. Toda depreciação deve apontar substituto.
3. Legado deve ficar isolado, não misturado com recomendação principal.

## Validação local

Rode:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate-bit-system.ps1
```

## Critério de qualidade

O sistema só é considerado estável quando:

- a documentação não contradiz a implementação
- o manifest é parseável e confiável
- os ids de ícone declarados existem de fato
- a ordem de leitura para humano e IA está clara
