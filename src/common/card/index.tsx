import React from "react";

const formClass = [
  "bg-white",
  "shadow-md",
  "rounded",
  "px-8",
  "pt-6",
  "pb-8",
  "mb-4",
];

const Card = ({
  children,
  title,
  style,
  className = formClass.join(" "),
  colSpan,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  className?: string;
  colSpan?: number;
}) => {
  return (
    <div
      style={style}
      className={className + (colSpan ? " col-span-" + colSpan : "")}
    >
      {title && (
        <div className="uppercase tracking-wide text-sm text-primary font-semibold">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
