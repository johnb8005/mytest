import React from "react";
import { Switch } from "@headlessui/react";
import { InputProps } from "../type";

export default ({ value, onChange }: InputProps<boolean>) => {
  const enabled = value || false;
  console.log({ enabled });
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`${enabled ? "bg-indigo-900" : "bg-indigo-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-black shadow-lg transform ring-0 transition ease-in-out duration-200`}
      />
    </Switch>
  );
};
