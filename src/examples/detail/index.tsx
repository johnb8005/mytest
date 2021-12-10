import React from "react";

import * as T from "../../common/grid/w-tabs/type";
import Main from "../../common/grid/w-tabs";

import DataLoad from "../../common/data-load";

type CustomType = { t: string };
type CustomType2 = { y: string };

const C11 = ({ data }: { data: CustomType }) => <p>fdsa {data.t}</p>;
const C12 = () => <p>my list</p>;
const C13 = () => <p>my list 2</p>;

const C21 = ({ data }: { data?: { text: string } }) => (
  <p>fdsa 3 + {data?.text}</p>
);
const C22 = () => <p>fdsa 2</p>;

const getC12 = (): Promise<{ text: string }> => {
  return Promise.resolve({
    text: "my async text " + new Date().toLocaleTimeString(),
  });
};

const C21Async = () => {
  return <DataLoad Component={C21} getData={getC12} />;
};

const D11 = ({ data }: { data: CustomType2 }) => <p>nested c {data.y}</p>;
const D12 = ({ data }: { data: { text2: string } }) => (
  <p>nested c2 {data.text2}</p>
);

const getD12 = (): Promise<{ text2: string }> => {
  return Promise.resolve({
    text2: "my async text " + new Date().toLocaleTimeString(),
  });
};

const D21Async = () => <DataLoad Component={D12} getData={getD12} />;

const itemsNested: T.Tab<CustomType2>[] = [
  {
    label: "Nested1",
    link: "/",
    cards: [
      { title: "D nested", Component: D11 },
      { title: "D nested2", Component: D21Async },
    ],
  },
  {
    label: "Nested2",
    link: "/nested",
    cards: [{ title: "D nested2", Component: D21Async }],
  },
];

const urlPrefix = "/detail";
const tabPath = "/tab-2";

const Nested = () => (
  <Main<CustomType2>
    data={{ y: "hello nested" }}
    items={itemsNested}
    urlPrefix={urlPrefix + tabPath}
  />
);

const items: T.Tab<CustomType>[] = [
  {
    label: "d",
    link: "/",
    cards: [
      { title: "Detail", Component: C11 },
      { title: "Associated list", Component: C12 },
      { title: "Associated list 2", Component: C13 },
    ],
  },
  {
    label: "tab2",
    link: tabPath,
    cards: [
      { title: "Assoc 1", Component: C21Async },
      { title: "Assoc 2", Component: C22 },
      { title: "Nested component", Component: Nested, noCard: true },
    ],
  },
];

export default () => (
  <Main<CustomType> data={{ t: "hello" }} items={items} urlPrefix={urlPrefix} />
);
