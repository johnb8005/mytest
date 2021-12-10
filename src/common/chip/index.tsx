import React from "react";

export default ({
  label,
  color,
  Icon,
}: {
  label: string;
  color: string;
  Icon?: ({ className }: { className: string }) => JSX.Element;
}) => {
  const text = `text-${color}-800`;
  const className = `px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${color}-100 ${text}`;
  return (
    <span className={className}>
      {Icon && <Icon className="h-5 w-5" />} {label}
    </span>
  );
};
