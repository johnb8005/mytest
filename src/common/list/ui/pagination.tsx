import React from "react";

import * as CoreList from "@nexys/core-list";
import { PaginationProps } from "@nexys/core-list/dist/list/ui-type";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const { getPagination } = CoreList.PaginationUtils;

const classPreviousNext = [
  "cursor-pointer",
  "relative",
  "inline-flex",
  "items-center",
  "px-2",
  "py-2",
  "rounded-l-md",
  "border",
  "border-gray-300",
  "bg-white",
  "text-sm",
  "font-medium",
  "text-gray-500",
  "hover:bg-gray-50",
].join(" ");

const classPageInactive = [
  "cursor-pointer",
  "relative",
  "inline-flex",
  "items-center",
  "px-4",
  "py-2",
  "bg-white",
  "border-gray-300",
  "text-gray-500",
  "border",
  "text-sm",
  "font-medium",
  "hover:bg-gray-50",
].join(" ");

const Pagination = ({
  n, // number of records returned
  nPerPage, // number of records per page
  idx, // page idx
  onClick, // onClick event
}: PaginationProps): JSX.Element | null => {
  if (n === 0) {
    return null;
  }

  // get number of pages
  const { nPage } = getPagination(n, nPerPage);

  const classActive =
    "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium";

  const pages: (number | null)[] = new Array(nPage)
    .fill(1)
    .map((_x, i) => i + 1);

  // todo implement "..." in the middle of the pages
  // [1, 2, null, 3, 4];

  return (
    <div>
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <a
          onClick={idx > 1 ? () => onClick(idx - 1) : undefined}
          className={classPreviousNext}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </a>
        {pages.map((page, i) => {
          if (page === null) {
            return (
              <a href="#" aria-current="page" className={classPageInactive}>
                ...
              </a>
            );
          }
          return (
            <a
              key={i}
              onClick={() => onClick(page)}
              aria-current="page"
              className={idx === page ? classActive : classPageInactive}
            >
              {page}
            </a>
          );
        })}

        <a
          onClick={idx < nPage ? () => onClick(idx + 1) : undefined}
          className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
