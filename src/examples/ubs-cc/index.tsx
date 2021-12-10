import { Definition } from "@nexys/core-list/dist/types";
import React from "react";

import List, { UI } from "../../common/list";
import DataLoad from "../../common/data-load";

export interface TransactionFx {
  rate: string;
  fee: string;
  price: string;
}

export interface Transaction {
  purchase: string;
  bookingText: string;
  price: string;
  booked: string;
  fxPrice?: TransactionFx;
}

const Fx = ({ data }: { data: TransactionFx }) => (
  <small>
    <ul>
      <li>{data.fee}</li>
      <li>{data.rate}</li>
      <li>{data.price}</li>
    </ul>
  </small>
);

const def: Definition<Transaction> = [
  { name: "purchase", label: "Purchase Date" },
  { name: "bookingText", label: "Booking Text" },
  { name: "price", label: "Price" },
  {
    name: "fxPrice",
    label: "FX",
    render: (x) => x.fxPrice && <Fx data={x.fxPrice} />,
  },
  { name: "booked", label: "Booked" },
];

const getData = async () => {
  const r = await fetch("/api/ubs-credit-card");
  return r.json();
};

const ListOut = ({ data }: { data: Transaction[] }) => (
  <UI.Layout>
    <List def={def} data={data} />
  </UI.Layout>
);

export default () => <DataLoad Component={ListOut} getData={getData} />;
