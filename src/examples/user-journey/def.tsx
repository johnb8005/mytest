import { FormDef, FormType } from "../../form/type";

import { Data } from "./type";

const formDef: FormDef<Data>[] = [
  {
    name: "name",
    label: "Name",
    uiType: FormType.Text,
    optional: false,
  },
];

export default formDef;
