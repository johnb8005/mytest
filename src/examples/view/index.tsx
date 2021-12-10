import React from "react";

import View from "../../common/view";

import { PaperClipIcon } from "@heroicons/react/solid";

const attachmentsMeta = [
  { filename: "resume_back_end_developer.pdf" },
  { filename: "coverletter_back_end_developer.pdf" },
];

const attachments = (
  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
    {attachmentsMeta.map((x, i) => {
      return (
        <li
          key={i}
          className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
        >
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-2 flex-1 w-0 truncate">{x.filename}</span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Download
            </a>
          </div>
        </li>
      );
    })}
  </ul>
);

const items = [
  { key: "Full Name", value: "Margot Foster" },
  { key: "Application for ", value: "Backend Developer" },
  { key: "Email address", value: " margotfoster@example.com" },
  { key: "Salary expectation", value: "$120,000" },
  {
    key: "About",
    value: `Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
  consequat sint. Sit id mollit nulla mollit nostrud in ea officia
  proident. Irure nostrud pariatur mollit ad adipisicing
  reprehenderit deserunt qui eu.`,
  },
  { key: "Attachments", value: attachments },
];

export default () => {
  return (
    <View
      title={"Application Information"}
      subtitle={"Personal details and application."}
      items={items}
    />
  );
};
