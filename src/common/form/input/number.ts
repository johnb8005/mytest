import * as T from "../type";
import InputGeneric from "./generic";

export const InputNumber = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
}: T.InputProps<number>) =>
  InputGeneric<number>({
    value,
    onChange,
    errors,
    disabled,
    placeholder,
    type: "number",
  });

export default InputNumber;
