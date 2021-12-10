import React from "react";

import Login from "../../common/login";

const Extra = () => (
  <div>
    <img
      className="mx-auto h-12 w-auto"
      src="/assets/img/workflow-mark-indigo-600.svg"
      alt="Workflow"
    />
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Sign in to your account
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600">
      Or{" "}
      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
        start your 14-day free trial
      </a>
    </p>
  </div>
);

const onSubmit = async () => {
  console.log(1);
  await new Promise((resolve) => setTimeout(resolve, 1.5 * 1000)); // wait a bit
  return { redirectUrl: "/home" };
};

export default () => <Login Extra={Extra} onSubmit={onSubmit} />;
