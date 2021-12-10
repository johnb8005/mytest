import React from "react";

const Nav =
  (navs: { name: string }[]) =>
  ({
    option,
    onClick,
  }: {
    option: number;
    onClick: (option: number) => void;
  }) =>
    (
      <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
        {navs.map((nav, i) => {
          const classInactive =
            "px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50";
          const classActive =
            "px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50";

          return (
            <li key={i} className={i === option ? classActive : classInactive}>
              <a className={"cursor-pointer"} onClick={() => onClick(i)}>
                {nav.name}
              </a>
            </li>
          );
        })}
      </ul>
    );

export default Nav;
