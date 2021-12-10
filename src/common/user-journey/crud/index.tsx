import React from "react";
import { Switch, Route } from "react-router-dom";
// ilustrate easy crud with list
import Detail from "./detail";
import List from "./list";
import Insert from "./insert";
import { FormDefWView } from "../../../form/type";
import * as T from "./type";

const Main = <A extends { uuid: string }>({
  dataInterface,
  formDef,
  urlPrefix,
  extraComponents = [],
}: {
  dataInterface: T.DataInterface<A>;
  formDef: FormDefWView<A>[];
  urlPrefix: string;
  extraComponents?: T.ExtraUnit<A>[];
}) => {
  // preparing urls
  const urls = {
    add: urlPrefix + "/add",
    list: urlPrefix,
    detail: urlPrefix + "/:uuid/detail",
  };

  const DetailC = () => (
    <Detail
      dataInterface={dataInterface}
      formDef={formDef}
      urlPrefix={urlPrefix}
      extraComponents={extraComponents}
    />
  );
  const ListC = () => (
    <List
      urlAdd={urls.add}
      urlPrefix={urlPrefix}
      formDef={formDef}
      list={dataInterface.list}
    />
  );

  const InsertC = () => {
    const { insert } = dataInterface;

    if (!insert) {
      return null;
    }

    const handleInsert = async (data: Omit<A, "uuid">) => {
      const { uuid } = await insert(data);
      return { urlRedirect: urls.detail.replace(":uuid", uuid) };
    };

    return (
      <Insert urlPrefix={urlPrefix} formDef={formDef} insert={handleInsert} />
    );
  };

  return (
    <Switch>
      <Route path={urls.detail} component={DetailC} />
      <Route path={urls.add} component={InsertC} />
      <Route exact path={urls.list} component={ListC} />
    </Switch>
  );
};

export default Main;
