export interface BtnCoreProps {
  link?: string;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  type?: "button" | "submit";
}

export type Action = "back" | "edit";
