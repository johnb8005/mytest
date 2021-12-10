import React from "react";

export default ({ children }: { children: JSX.Element }) => (
  <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
    {children}
  </div>
);
