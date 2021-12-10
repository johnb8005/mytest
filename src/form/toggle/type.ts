import { FormDefWView } from "../type";

export interface ToggleProps<A> {
  data: A;
  title?: string;
  subtitle?: string;
  update: (data: A) => Promise<boolean>;
  onDelete?: () => Promise<{ urlRedirect?: string }>;
  formDef: FormDefWView<A>[];
}
