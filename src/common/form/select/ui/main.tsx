import React from "react";
import * as T from "../../type";
import { getValue } from "./utils";

const Select = <A extends string | number>({
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
  options,
  disabled,
  className = "form-select mt-1 block w-full focus:outline-none focus:shadow-outline",
}: T.SelectProps<A> & { className?: string }) => {
  const selectedValue = options.find((x) => x.id === value);
  const selectedId: A | undefined = selectedValue && selectedValue.id;

  return (
    <select
      disabled={disabled}
      className={className}
      onChange={(v) => onChange(getValue(v.target.value))}
      defaultValue={selectedId}
    >
      <option value={""}>-</option>
      {options.map((option, i) => (
        <option key={i} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
