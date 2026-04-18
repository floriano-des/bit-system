export type ComponentEntry = {
  name: string;
  status: 'auditar' | 'refatorar' | 'pronto para documentar';
  category: string;
  summary: string;
  guidance: string;
};

export const components: ComponentEntry[] = [
  {
    name: 'Button',
    status: 'refatorar',
    category: 'Ação',
    summary:
      'Existe no Figma com boas referências visuais, mas ainda modelado por casos específicos como mini button e botão com WhatsApp.',
    guidance:
      'Consolidar em uma API única com propriedades para variant, size e icon slots.',
  },
  {
    name: 'Checkbox',
    status: 'auditar',
    category: 'Seleção',
    summary:
      'Há evidência visual e documentação introdutória, porém a página atual não expõe anatomy, states completos nem regras de uso.',
    guidance:
      'Definir estados default, checked, hover, focus e disabled, além da semântica de label.',
  },
  {
    name: 'Content Boxes',
    status: 'refatorar',
    category: 'Conteúdo',
    summary:
      'O arquivo mostra famílias úteis para a realidade da agência, mas elas parecem mais templates de bloco do que componentes puros.',
    guidance:
      'Reclassificar parte deles como patterns ou templates, não como componentes base.',
  },
  {
    name: 'Accordion',
    status: 'pronto para documentar',
    category: 'Revelação de conteúdo',
    summary:
      'Já existe variação collapsed e expanded no arquivo, com caminho claro para documentação formal.',
    guidance:
      'Formalizar comportamento, conteúdo permitido, tamanho recomendado e acessibilidade por teclado.',
  },
];
