import React from "react";
import { Link } from "react-router-dom";

import Icon from "../icon";

const BtnLink = ({
  url,
  label,
  iconAppend,
  iconPrepend,
}: {
  url: string;
  label?: string;
  iconPrepend?: string;
  iconAppend?: string;
}) => (
  <Link to={url}>
    <button className={"btn btn-secondary btn-sm"}>
      {iconPrepend && (
        <>
          <Icon name={iconPrepend}></Icon>&nbsp;
        </>
      )}
      {label}
      {iconAppend && (
        <>
          &nbsp;<Icon name={iconAppend}></Icon>
        </>
      )}
    </button>
  </Link>
);

export default BtnLink;
