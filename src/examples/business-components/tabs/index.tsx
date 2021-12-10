import React from "react";
import Tabs from "../../../common/tabs/swap-component";

export default () => {
  return (
    <Tabs
      navs={[
        { name: "A", Component: <p>fd</p> },
        { name: "B", Component: <p>ew</p> },
      ]}
    />
  );
};
