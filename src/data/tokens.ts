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
      'Camada semântica pensada para design, web e consumo por IA. O portal usa nomes orientados à intenção.',
    items: [
      {
        name: 'color.bg.canvas',
        value: '#100F0F',
        usage: 'Canvas principal do portal, páginas mais densas e módulos de alto contraste.',
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
        value: '#FAFAFA',
        usage: 'Texto principal em superfícies escuras e títulos de interface.',
      },
      {
        name: 'color.text.muted',
        value: '#AFAEAF',
        usage: 'Metadados, descrições, textos de apoio e documentação secundária.',
      },
      {
        name: 'color.border.default',
        value: '#393838',
        usage: 'Divisórias, contornos leves, molduras de cards e frames de interface.',
      },
    ],
  },
  {
    id: 'spacing',
    title: 'Spacing and dimensions',
    description:
      'Escala base recomendada para templates, páginas e componentes. O sistema preserva uma progressão curta e disciplinada.',
    items: [
      { name: 'space.2xs', value: '4px', usage: 'Respiros mínimos e microajustes.' },
      { name: 'space.xs', value: '8px', usage: 'Espaçamento curto entre elementos diretamente relacionados.' },
      { name: 'space.sm', value: '12px', usage: 'Blocos curtos de label, apoio e pilhas compactas.' },
      { name: 'space.md', value: '16px', usage: 'Distância padrão entre componentes e grupos básicos.' },
      { name: 'space.lg', value: '24px', usage: 'Separação entre blocos visuais relevantes.' },
      { name: 'space.xl', value: '40px', usage: 'Respiro entre seções e módulos principais.' },
    ],
  },
  {
    id: 'typography',
    title: 'Typography',
    description:
      'Hierarquia textual consolidada a partir do Figma e do kit em código, com foco em decks, propostas, landing pages e peças editoriais.',
    items: [
      {
        name: 'type.display.lg',
        value: 'VT323 / 64px',
        usage: 'Capas, statements principais, heros e títulos de alto impacto.',
      },
      {
        name: 'type.heading.md',
        value: 'VT323 / 40px',
        usage: 'Títulos intermediários, seções e cards prioritários.',
      },
      {
        name: 'type.heading.sm',
        value: 'Inconsolata Bold / 22px',
        usage: 'Subseções, cards de destaque, nomenclaturas e microarquitetura.',
      },
      {
        name: 'type.body.md',
        value: 'Inconsolata Regular / 18px',
        usage: 'Texto corrido em docs, propostas, landing pages e páginas de sistema.',
      },
      {
        name: 'type.caption',
        value: 'Inconsolata Semibold / 12px',
        usage: 'Legendas, metadados, labels, navegação e instruções curtas.',
      },
    ],
  },
];
