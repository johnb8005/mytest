import React from "react";

import DataLoad from "../../common/data-load";

interface SaltUsage {
  phone: string;
  owner: string;
  subscription: string;
  user: string;
  balance: string;
  balanceNumber: number;
}

const UI = ({ data }: { data: SaltUsage }) => {
  return (
    <ul>
      <li>{data.phone}</li>
      <li>{data.owner}</li>
      <li>{data.subscription}</li>
      <li>{data.balance}</li>
      <li>{data.user}</li>
    </ul>
  );
};

const getData = async (): Promise<SaltUsage> => {
  const r = await fetch("/api/salt");
  return r.json();
};

export default () => {
  return <DataLoad Component={UI} getData={getData} />;
};
