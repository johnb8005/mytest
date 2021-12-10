import React from "react";

export default ({
  n,
  gap = "4",
  children,
}: {
  n: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | null;
  gap?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  const nClass: string = n === null ? "none" : String(n);
  const className = `grid grid-cols-${nClass} gap-${gap}`;

  return <div className={className}>{children}</div>;
};
