import React from "react";

import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/outline";

const EditIcon = () => <PencilIcon width={"1em"} className={"text-blue-500"} />;

export const EditLink = ({ url }: { url: string }) => (
  <Link to={url}>
    <EditIcon />
  </Link>
);
