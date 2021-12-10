export interface Link {
  label: string;
  link?: string;
}

export interface LinkAndComponent extends Link {
  Component: () => JSX.Element;
}

export interface LinkAndComponentAndPath extends LinkAndComponent {
  path: string;
}
