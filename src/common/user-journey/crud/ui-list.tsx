import React from "react";
import List from "../..//list";
import { DefinitionItem } from "@nexys/core-list/dist/types";
import * as UIUtils from "./ui-utils";

const UIList = <A extends { uuid: string }>({
  data,
  formDef,
  urlPrefix,
}: {
  data: A[];
  formDef: DefinitionItem<A>[];
  urlPrefix: string;
}): JSX.Element => (
  <List
    data={data}
    def={[
      ...formDef,
      {
        name: "uuid",
        render: (x) => (
          <UIUtils.EditLink url={`${urlPrefix}/${x.uuid}/detail`} />
        ),
      },
    ]}
    config={{ nPerPage: 10 }}
  />
);

export default UIList;
