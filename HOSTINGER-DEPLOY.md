# Deploy na Hostinger

## Base

- domínio principal: `doispalitosmkt.com.br`
- subdomínio do portal: `bitsystem.doispalitosmkt.com.br`
- stack do portal: Astro
- saída do build: estática em `dist/`

## Fluxo recomendado

1. Criar o repositório no GitHub
2. Adicionar o remote no projeto local
3. Fazer o primeiro push para a branch `main`
4. Criar o subdomínio `bitsystem.doispalitosmkt.com.br` no hPanel
5. Criar um novo site ou app separado para esse subdomínio
6. Conectar o repositório GitHub na Hostinger
7. Configurar o comando de build como `npm install && npm run build`
8. Configurar a publicação apontando para `dist/`
9. Ativar SSL

## Comandos locais

```bash
git add .
git commit -m "feat: initial public Bit System portal"
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

## Verificações

- o build local precisa passar antes do push
- o subdomínio precisa resolver corretamente
- a Hostinger deve servir o conteúdo de `dist/`
- o SSL deve estar ativo antes da divulgação pública

## Observação importante

O portal foi estruturado como projeto independente do WordPress principal. Isso evita acoplamento com tema, plugins e limitações do site institucional.
