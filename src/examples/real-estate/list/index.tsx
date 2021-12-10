import React from "react";

import DataLoad from "../../../common/data-load";
import List, { UI } from "../../../common/list";

import { Data } from "./type";
import def from "./def";

const UIList = ({ data }: { data: Data[] }) => {
  return (
    <UI.Layout>
      <List<Data> def={def} data={data} />
    </UI.Layout>
  );
};

const getData = async (): Promise<Data[]> => {
  const r = await fetch("/api/rytz/list");
  const d: Data[] = await r.json();

  return d.sort((a, b) => a.price - b.price);
};

export default () => <DataLoad Component={UIList} getData={getData} />;
