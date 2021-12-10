import React from "react";
import { title, github } from "../../config";
import { CodeIcon } from "@heroicons/react/outline";

export default () => (
  <>
    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
      Title
    </h2>

    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      {title}
    </p>

    <p>
      <a href={github.url}>
        <CodeIcon
          className="h-6 w-6 inline-block text-indigo-600"
          aria-hidden="true"
        />
      </a>
      &nbsp;available under MIT license. Contributions are welcome.
    </p>
  </>
);
