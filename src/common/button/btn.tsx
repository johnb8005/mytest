import React from "react";
import { Link } from "react-router-dom";
import * as T from "./type";

const Btn = ({
  children,
  link,
  onClick,
  variant,
  textColor,
  shade = 500,
  color,
  disabled,
  type = "button",
}: {
  children: JSX.Element;
} & T.BtnCoreProps & {
    variant?: "filled" | "transparent";
    textColor?: string;
    shade?: number;
    color?: string;
  }) => {
  const className =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  const classTransitions =
    "transition-all duration-500 ease-in-out hover:brightness-150 transform hover:-translate-y-1 hover:scale-110";

  const classArray: string[] = [
    "rounded-full",

    `m-3 pl-5 pr-5 pt-2 pb-2 ${
      variant === "filled"
        ? textColor
        : `text-${color}-${shade} dark:text-white `
    } border-none`,

    "font-extralight",
  ];

  if (variant === "filled") {
    classArray.push(
      `bg-${color}-${shade} dark:bg-${color}-${
        shade < 900 ? shade + 100 : shade
      }`
    );

    /*classArray.push(
      theme === "dark"
        ? "shadow-white hover:shadow-whiteMd"
        : "shadow-sm focus:shadow-md hover:shadow-lg"
    );*/
  }

  if (variant === "transparent") {
    classArray.push(`hover:font-light hover:text-${color}-${shade + 200}`);
  }

  const classDisabled = "opacity-50 cursor-default";

  if (!disabled) {
    classArray.push(classTransitions);
  }

  if (disabled) {
    classArray.push(classDisabled);
  }

  if (link) {
    return (
      <Link to={link} type="button" className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );

  //throw Error("btn action: either onclick or link must be given");
};

export default Btn;
