export type TokenGroup = {
  id: string;
  title: string;
  description: string;
  items: Array<{
    name: string;
    value: string;
    usage: string;
  }>;
};

export const tokenGroups: TokenGroup[] = [
  {
    id: 'color-semantic',
    title: 'Color semantic',
    description:
      'Camada semântica pensada para design, web e consumo por IA. O portal usa nomes orientados a intenção.',
    items: [
      {
        name: 'color.bg.canvas',
        value: '#FAFAFA',
        usage: 'Planos de fundo claros, documentos, áreas de leitura extensa.',
      },
      {
        name: 'color.bg.brand.primary',
        value: '#00FFD1',
        usage: 'Chamadas principais, destaques de marca e elementos de alta energia.',
      },
      {
        name: 'color.bg.brand.secondary',
        value: '#FF00FF',
        usage: 'Contrastes editoriais, detalhes de assinatura e peças de forte presença visual.',
      },
      {
        name: 'color.text.default',
        value: '#100F0F',
        usage: 'Texto principal para leitura longa e documentação.',
      },
      {
        name: 'color.text.muted',
        value: '#666465',
        usage: 'Metadados, descrições, textos de apoio.',
      },
      {
        name: 'color.border.default',
        value: '#C9C9C9',
        usage: 'Divisórias, contornos leves e estrutura de cards.',
      },
    ],
  },
  {
    id: 'spacing',
    title: 'Spacing and dimensions',
    description:
      'Escala base recomendada para templates, páginas e componentes. O sistema atual do Figma já sugere uma progressão consistente, mas aqui ela aparece padronizada.',
    items: [
      { name: 'space.2xs', value: '4px', usage: 'Respiros mínimos e microajustes.' },
      { name: 'space.xs', value: '8px', usage: 'Espaçamento curto entre elementos relacionados.' },
      { name: 'space.sm', value: '12px', usage: 'Blocos curtos de label e apoio.' },
      { name: 'space.md', value: '16px', usage: 'Distância padrão entre componentes.' },
      { name: 'space.lg', value: '24px', usage: 'Separação entre blocos visuais relevantes.' },
      { name: 'space.xl', value: '40px', usage: 'Respiro entre seções e módulos principais.' },
    ],
  },
  {
    id: 'typography',
    title: 'Typography',
    description:
      'Hierarquia textual consolidada a partir do arquivo atual do Figma, com foco em decks, propostas, landing pages e peças editoriais.',
    items: [
      {
        name: 'type.display.lg',
        value: 'VT323 / 48px',
        usage: 'Capas, statements principais e títulos hero.',
      },
      {
        name: 'type.heading.md',
        value: 'VT323 / 32px',
        usage: 'Títulos intermediários e seções de alto impacto.',
      },
      {
        name: 'type.heading.sm',
        value: 'Inconsolata Medium / 32px',
        usage: 'Subseções, cards de destaque, cases.',
      },
      {
        name: 'type.body.md',
        value: 'Inconsolata Regular / 16px',
        usage: 'Texto corrido em docs, propostas e landing pages.',
      },
      {
        name: 'type.caption',
        value: 'Inconsolata Semibold / 14px',
        usage: 'Legendas, metadados, instruções curtas.',
      },
    ],
  },
];
