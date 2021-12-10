// see https://tailwindcss.com/docs/resize#resize-in-all-directions
// by default: full width with ability to resize vertically
import React from "react";
import * as T from "../type";

const Textarea = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
}: T.InputProps<string>) => {
  const handleChange = (v: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = v.target;

    if (value === "") {
      return onChange(undefined);
    }

    return onChange(value);
  };
  return (
    <textarea
      className="resize-y border rounded-md w-full py-2 px-3"
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Textarea;
