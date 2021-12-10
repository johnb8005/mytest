import React from "react";
import * as T from "../type";

const typeToTypeUI = (type: T.InputType) => {
  // here always use text, number does not look good
  if (type === "number") {
    return "text";
  }

  return type;
};

export const InputGeneric = <A,>({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  type,
}: T.InputProps<A> & { type: T.InputType }) => {
  /*const classArra2y = [
    "shadow",
    "appearance-none",
    "border",
    "rounded",
    "w-full",
    "py-2",
    "px-3",
    "text-gray-70",
    "leading-tight",
    "focus:outline-none",
    "focus:shadow-outline",
  ];*/

  const classArray = [
    "px-3",
    "py-2",
    "border",
    "rounded-md",
    "shadow-sm",
    "focus:ring-indigo-500",
    "focus:border-indigo-500",
    "block w-full",
    "sm:text-sm border-gray-300",
    "rounded-md",
  ];
  // another styling possibioty
  // https://tailwindui.com/components/application-ui/forms/form-layouts
  //"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"

  if (errors && errors.length > 0) {
    classArray.push("border-red-500");
    classArray.push("mb-3");
  }

  const handleChange = (v: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = v.target;

    if (value === "") {
      return onChange(undefined);
    }

    if (type === "number") {
      const nValue = Number(value);

      if (isNaN(nValue)) {
        return onChange(undefined);
      }
      return onChange(nValue as any as A);
    }

    return onChange(value as any as A);
  };

  return (
    <input
      className={classArray.join(" ")}
      placeholder={placeholder}
      disabled={disabled}
      type={typeToTypeUI(type)}
      value={(value as any) || ""}
      onChange={handleChange}
    />
  );
};

export default InputGeneric;
