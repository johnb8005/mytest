/**
 * taken from https://codepen.io/lhermann/pen/EBGZRZ
 */
import React from "react";
import { InputProps } from "../type";

export default ({ value, onChange, disabled }: InputProps<boolean>) => {
  const transform =
    value === undefined
      ? "translateX(50%)"
      : value === true
      ? undefined
      : "translateX(100%)";
  const dotColor: string =
    !disabled && typeof value === "boolean" ? "bg-white" : "bg-gray-400";

  return (
    <div
      className="relative cursor-pointer focus:outline-none focus:shadow-outline"
      onClick={() => onChange(!value)}
    >
      <div className="block bg-gray-600 w-14 h-8 rounded-full  focus:outline-none focus:shadow-outline"></div>

      <div
        className={
          "dot absolute left-1 top-1  w-6 h-6 rounded-full transition focus:outline-none focus:shadow-outline " +
          dotColor
        }
        style={{ transform }}
      ></div>
    </div>
  );
};
