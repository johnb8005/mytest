import React from "react";

import List, { UI } from "../../common/list";

import I from "@nexys/mock-data/dist/names";

const nMale = I.male.length;

const data: { firstName: string; lastName: string; sex: boolean }[] = [
  ...I.male,
  ...I.female,
]
  .map((firstName, i) => ({
    firstName,
    lastName: "Doe" + i,
    sex: i < nMale,
  }))
  .map((x) => ({ ...x, r: Math.random() }))
  .sort((a, b) => a.r - b.r);

const Default = (): JSX.Element => (
  <List
    data={data}
    def={[
      { name: "lastName", label: "Name" },
      { name: "firstName", label: "First Name" },
      {
        name: "sex",
        label: "Sex",
        render: (x) =>
          x.sex === true ? (
            <span className="text-blue-600">♂</span>
          ) : (
            <span className="text-pink-600">♀</span>
          ),
      },
    ]}
    config={{ nPerPage: 10 }}
  />
);

export default () => (
  <UI.Layout>
    <Default />
  </UI.Layout>
);
