import React from "react";

import Grid from "../../common/grid";
import Card from "../../common/card";
import { ExtraUnit } from "../../common/user-journey/crud/type";

import { ToggleProps } from "./type";
import Toggle from "./ui";
import GridWTabs from "../../common/grid/w-tabs";
import { CardComponent, Tab } from "../../common/grid/w-tabs/type";

// todo here use the "detail" component, see in example

export const ComponentGrid = <A,>({
  data,
  urlPrefix,
  extraComponents=[],
  ...toggleProps
}: {
  extraComponents?: ExtraUnit<A>[];
  urlPrefix: string;
} & ToggleProps<A>) => {
  const tabs: string[] = [];

  extraComponents.forEach((c) => {
    if (c.tab) {
      tabs.push(c.tab);
    }
  });

  if (tabs.length > 0) {
    const tabsWComponent: Tab<A>[] = [undefined, ...tabs].map((tabString) => {
      const cards: CardComponent<A>[] = extraComponents
        .filter((x) => x.tab === tabString)
        .map((e) => {
          return { Component: e.Component, title: e.title || "" };
        });

      if (!tabString) {
        cards.unshift({
          title: "Main",
          Component: ({ data }: { data: A }) => (
            <Toggle data={data} {...toggleProps} />
          ),
        });
      }

      return {
        label: tabString || "Detail",
        link: tabString ? labelToLink(tabString) : "",
        cards,
      };
    });

    return (
      <GridWTabs items={tabsWComponent} data={data} urlPrefix={urlPrefix} />
    );
  }

  return (
    <Grid n={2}>
      <>
        <Toggle data={data} {...toggleProps} />
        {extraComponents.map((C, i) => (
          <Card key={i} title={C.title} colSpan={C.colSpan}>
            <C.Component data={data} />
          </Card>
        ))}
      </>
    </Grid>
  );
};

const labelToLink = (l: string) => "/" + l.toLowerCase();

export default ComponentGrid;
