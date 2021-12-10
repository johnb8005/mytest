import React from "react";

import Card from "../../common/card";

export default () => (
  <div className="grid grid-cols-3 gap-4">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <Card key={i} title={"fd"}>
        <p>gfd</p>
        <p>gfd</p>
        <p>{"d ".repeat(Math.ceil(100 * Math.random()))}</p>
      </Card>
    ))}
  </div>
);
