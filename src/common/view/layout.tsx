import React from "react";

export default ({
  title,
  subtitle,
  actions,
  children,
}: {
  title?: string;
  subtitle?: string;
  actions?: { name: string | JSX.Element; onClick: () => void }[];
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        {title && (
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{subtitle}</p>
        )}

        <div className="grid grid-cols-12 gap-x-4">
          {actions &&
            actions.map((action, i) => (
              <span
                key={i}
                className={
                  "cursor-pointer " +
                  (i === 0
                    ? "inline-grid col-start-" + (12 - actions.length + 1)
                    : "")
                }
                onClick={action.onClick}
              >
                {action.name}
              </span>
            ))}
        </div>

        {/*<ul className={"top-0 right-10 float-right "}>
          {actions &&
            actions.map((action, i) => (
              <li key={i} className={"cursor-pointer"} onClick={action.onClick}>
                {action.name}
              </li>
            ))}
            </ul>*/}
      </div>
      {children}
    </div>
  );
};
