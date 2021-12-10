import React from "react";

export default ({
  items,
}: {
  items?: { key: string; value: string | JSX.Element }[];
}) => (
  <div className="border-t border-gray-200">
    <dl>
      {items &&
        items.map((item, i) => {
          const bgColor = i % 2 === 0 ? "bg-gray-50" : "bg-white";
          const divClass =
            "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 " + bgColor;

          return (
            <div key={i} className={divClass}>
              <dt className="text-sm font-medium text-gray-500">{item.key}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {item.value}
              </dd>
            </div>
          );
        })}
    </dl>
  </div>
);
