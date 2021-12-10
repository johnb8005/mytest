import React from "react";

import Tabs from "../../tabs/w-router";
import { LinkAndComponentAndPath } from "../../tabs/type";

import * as T from "./type";
import CardLayout from "./card-layout";

export default <A,>({
  items,
  urlPrefix,
  data,
}: {
  items: T.Tab<A>[];
  urlPrefix?: string;
  data: A;
}) => {
  const navs: Omit<LinkAndComponentAndPath, "path">[] = items.map((item) => {
    return {
      label: item.label,
      link: item.link,
      Component: () => CardLayout({ data, cards: item.cards }),
    };
  });
  return <Tabs urlPrefix={urlPrefix} navs={navs} />;
};
