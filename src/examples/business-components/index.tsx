import React from "react";

import Chip from "../../common/chip";
import * as Buttons from "../../common/button";
import { CheckIcon } from "@heroicons/react/outline";
import Tabs from "./tabs";
import { linksApp } from "../../links";
import Heading from "./heading";

import Card from "../../common/card";

export default () => {
  return (
    <>
      <p className={"text-xl"}>Business Components</p>
      <Card title={"Tabs"}>
        <Tabs />
      </Card>

      <Card title={"Buttons"}>
        <Buttons.Dropdown
          label={"My Dropdown btn"}
          options={[
            { name: "option #1", link: linksApp.form.link },
            { name: "option #2", link: linksApp.home.link },
          ]}
        />
      </Card>

      <Card title={"Chips"}>
        <Chip label={"Success"} color={"green"} />
        <Chip label={"Warning"} color={"yellow"} />
        <Chip label={"Error"} color={"red"} />
        <br />
        <Chip Icon={CheckIcon} label={"Success"} color={"green"} />
      </Card>

      <Card title={"Heading"}>
        <Heading />
      </Card>
    </>
  );
};
