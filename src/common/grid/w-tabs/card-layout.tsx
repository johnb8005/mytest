import React from "react";

import Grid from "..";
import Card from "../../card";

import * as T from "./type";

const CardLayout = <A,>({
  data,
  cards,
}: {
  data: A;
  cards: T.CardComponent<A>[];
}) => (
  <Grid n={2}>
    {cards.map(({ title, Component, noCard = false }, i) => {
      const className = noCard ? [].join(" ") : undefined;

      return (
        <Card key={i} title={title} className={className}>
          <Component data={data} />
        </Card>
      );
    })}
  </Grid>
);

export default CardLayout;
