import React from "react";

import DataLoad from "../../common/data-load";
import { ExtraUnit } from "../../common/user-journey/crud/type";

import { ToggleProps } from "./type";
import Toggle from "./ui";
import ComponentGrid from "./grid";

/**
 * add async wrapper
 * instead of passing data, a getData function is passed
 */
export const WData = <A,>({
  getData,
  urlPrefix,
  ...basicProps
}: {
  getData: () => Promise<A>;
  urlPrefix: string;
  extraComponents?: ExtraUnit<A>[];
} & Omit<ToggleProps<A>, "data">) => (
  <DataLoad
    Component={(x) => (
      <ComponentGrid data={x.data} urlPrefix={urlPrefix} {...basicProps} />
    )}
    getData={getData}
  />
);

export default Toggle;
