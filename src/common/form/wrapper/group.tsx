import React from "react";
import * as T from "./type";

const classes1 = ["block", "text-sm", "font-medium", "text-gray-700"];
const classes2 = ["block", "text-sm", "font-bold", "text-gray-700", "mb-2"];

export const Wrapper = ({ label, children, errors }: T.WrapperProps) => {
  return (
    <div className="mb-4">
      <label className={classes1.join(" ")}>
        {/*htmlFor="username">*/}
        {label}
      </label>
      {children}
      {errors &&
        errors.map((e, i) => (
          <p className="text-red-500 text-xs italic" key={i}>
            {e}
          </p>
        ))}
    </div>
  );
};

<div className="col-span-6 sm:col-span-3 lg:col-span-2">
  <label className="block text-sm font-medium text-gray-700">
    ZIP / Postal
  </label>
  <input
    type="text"
    name="postal-code"
    id="postal-code"
    autoComplete="postal-code"
    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  />
</div>;

export default Wrapper;
