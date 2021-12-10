import React from "react";

import Card from "../../common/card";
import FormSimple from "./simple";
import * as FormToggle from "../../form/toggle";
import { Data } from "./type";
import formDef from "./def";

const update = (data: Data): Promise<boolean> => {
  console.log("handling data");
  return Promise.resolve(true);
};
const getData = () =>
  Promise.resolve({
    permit: 1,
    permit2: "1",
    permit3: { id: 1, name: "f" },
    firstName: "fds",
    age: 2,
    married: true,
    birthdate: "2021-07-07" as any,
  });

export default () => {
  return (
    <div className={"grid grid-cols-2 gap-4"}>
      <Card>
        <FormSimple />
      </Card>
      <FormToggle.WData formDef={formDef} update={update} getData={getData} />
    </div>
  );
};
