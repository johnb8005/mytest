import React from "react";

import { FormDefWView, FormType } from "../type";

import ViewInner from "../../common/view/index";

const toViewString = <A,>(
  data: A,
  { name, uiType, render, options }: FormDefWView<A>
): string | JSX.Element | undefined => {
  if (render) {
    return render(data) as string;
  }

  const value = data[name];

  if (value === undefined) {
    return undefined;
  }

  if (uiType === FormType.SelectOptionSet) {
    return (value as any as { name: string }).name;
  }

  if (uiType === FormType.Select && options) {
    const f = options.find((x) => x.id === (value as any));

    if (!f) {
      return undefined;
    }

    return f.name;
  }

  if (uiType === FormType.Toggle) {
    return (value as any as boolean) === true ? "yes" : "no";
  }

  return (value as any).toString();
};

const View = <A,>({
  formDef,
  data,
}: {
  formDef: FormDefWView<A>[];
  data: A;
}) => {
  const items: {
    key: string;
    value: string | JSX.Element;
  }[] = formDef.map((defUnit) => ({
    key: defUnit.label || defUnit.name.toString(),
    value: toViewString(data, defUnit) || "-",
  }));

  return <ViewInner items={items} />;
};

export default View;
