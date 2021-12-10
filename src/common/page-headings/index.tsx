// taken from https://tailwindui.com/components/application-ui/headings/page-headings
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export interface HeadingsProps {
  title: string;
  metas?: {
    label: string;
    Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  }[];
  actions?: {
    label: string;
    Icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
    to: string;
    isPrimary?: boolean;
  }[];
}

export default ({ title, metas, actions }: HeadingsProps) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {title}
        </h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          {metas &&
            metas.map((meta, i) => (
              <div
                key={i}
                className="mt-2 flex items-center text-sm text-gray-500"
              >
                <meta.Icon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                {meta.label}
              </div>
            ))}
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        {actions &&
          actions.map((action, i) => {
            const classArray = [
              "inline-flex",
              "items-center",
              "px-4",
              "py-2",
              "border",

              "rounded-md",
              "shadow-sm",
              "text-sm",
              "font-medium",

              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-offset-2",
              "focus:ring-indigo-500",
            ];

            const c2 = [
              "border-gray-300",
              "text-gray-700",
              "bg-white",
              "hover:bg-gray-50",
            ];
            const c3 = [
              "border-transparent",
              "text-white",
              "bg-indigo-600",
              "hover:bg-indigo-700",
            ];

            const btnClassArray = action.isPrimary
              ? classArray.concat(c3)
              : classArray.concat(c2);

            return (
              <span
                key={i}
                className={
                  "sm:block" +
                  (i > 0 ? " ml-3" : "") +
                  (!action.isPrimary ? " hidden" : "")
                }
              >
                <Link to={action.to}>
                  <button
                    type="button"
                    className={btnClassArray.join(" ")}
                    //
                  >
                    {action.Icon && (
                      <action.Icon
                        className={
                          "-ml-1 mr-2 h-5 w-5" +
                          (!action.isPrimary ? " text-gray-500" : "")
                        }
                        aria-hidden="true"
                      />
                    )}
                    {action.label}
                  </button>
                </Link>
              </span>
            );
          })}

        {/* Dropdown */}
        <Menu as="span" className="ml-3 relative sm:hidden">
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                More
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  {actions &&
                    actions
                      .filter((x) => !x.isPrimary)
                      .map((action, i) => (
                        <Menu.Item key={i}>
                          {({ active }) => (
                            <Link
                              to={action.to}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {action.label}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};
