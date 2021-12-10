import React from "react";

import Spinner from "../spinner";

const DataLoad = <A,>({
  getData,
  Component,
  forceReload,
}: {
  getData: () => Promise<A>;
  Component: ({ data }: { data: A }) => JSX.Element;
  forceReload?: number;
}): JSX.Element => {
  const [data, setData] = React.useState<A | null>(null);

  if (forceReload) {
    React.useEffect(() => {
      setData(null);
    }, [forceReload]);
  }

  if (data === null) {
    getData().then((x) => setData(x));
    return <Spinner />;
  }

  return <Component data={data} />;
};

export default DataLoad;
