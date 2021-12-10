export interface CardComponent<A> {
  title: string;
  noCard?: boolean;
  Component: ({ data }: { data: A }) => JSX.Element;
}

export interface Tab<A> {
  label: string;
  link?: string;
  cards: CardComponent<A>[];
}
