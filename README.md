# Bit System Portal

Portal público do Bit System, o sistema operacional de marca, templates e criação assistida por IA da 2P Growth Lab.

## Objetivo

O portal organiza foundations, tokens, patterns, templates, governança e playbooks de IA em uma camada pública e versionada. O Figma continua como biblioteca visual. O portal vira a fonte de verdade consultável.

## Stack

- Astro
- Markdown versionado em `src/content`
- Dados estruturados em `src/data`
- Deploy recomendado no subdomínio `bitsystem.doispalitosmkt.com.br`

## Estrutura principal

```text
src/
├── components/
├── content/
│   ├── ai-playbooks/
│   ├── foundations/
│   ├── governance/
│   ├── patterns/
│   └── templates/
├── data/
├── layouts/
├── pages/
└── styles/
```

## Rotas da v1

- `/`
- `/foundations`
- `/tokens`
- `/components`
- `/patterns`
- `/templates`
- `/ai-playbooks`
- `/governance`
- `/figma`
- `/search`

## Comandos

| Comando | Ação |
| --- | --- |
| `npm install` | Instala dependências |
| `npm run dev` | Sobe ambiente local |
| `npm run build` | Gera build de produção |
| `npm run preview` | Pré visualiza o build |

## Deploy sugerido na Hostinger

1. Criar website Node.js para `bitsystem.doispalitosmkt.com.br`
2. Conectar o repositório GitHub
3. Configurar build padrão do Astro
4. Publicar com SSL automático

## Publicação inicial

```bash
git add .
git commit -m "feat: initial public Bit System portal"
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

## Observações

- Arquivos `.fig`, `.zip` e extrações locais ficam ignorados no Git.
- O repositório foi preparado para ser público desde a v1.
