import React from "react";
import { useParams } from "react-router-dom";
import Main from "../../common/user-journey/crud";
import { ExtraUnit } from "../../common/user-journey/crud/type";
import { Data } from "./type";

import formDef from "./def";
import * as I from "./interface";

const urlPrefix = "/user-journey";

const SubCrud = () => {
  const { uuid } = useParams<{ uuid?: string }>();
  return (
    <Main
      dataInterface={I.dataInterface}
      formDef={formDef}
      urlPrefix={urlPrefix + "/" + uuid + "/detail"}
    />
  );
};

const extraComponents: ExtraUnit<Data>[] = [
  { Component: () => <p>gfds</p> },
  { Component: () => <SubCrud />, colSpan: 2, title: "Sub" },
  { Component: ({ data }: { data: Data }) => <p>hello world {data.uuid}</p> },
  {
    tab: "Trial",
    Component: ({ data }: { data: Data }) => <p>hello world {data.uuid}</p>,
  },
];

export default () => (
  <Main
    dataInterface={I.dataInterface}
    formDef={formDef}
    urlPrefix={urlPrefix}
    extraComponents={extraComponents}
  />
);
