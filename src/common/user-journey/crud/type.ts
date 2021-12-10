export type Uuid = string;

export interface ExtraUnit<A> {
  Component: ({ data }: { data: A }) => JSX.Element;
  paper?: boolean;
  tab?: string;
  title?: string;
  colSpan?: number;
}

export interface DetailDataInterface<A> {
  detail: (uuid: Uuid) => Promise<A>;
  update: (uuid: Uuid, data: Partial<A>) => Promise<boolean>;
  deleteByUuid?: (uuid: Uuid) => Promise<void>;
}

export interface DataInterface<A> extends DetailDataInterface<A> {
  list: () => Promise<A[]>;
  insert?: (data: Omit<A, "uuid">) => Promise<{ uuid: Uuid }>;
}
