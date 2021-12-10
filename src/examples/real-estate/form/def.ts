import { FormDef, FormType } from "../../../form/type";

import { Data } from "./type";

const formDef: FormDef<Data>[] = [
  {
    name: "ref",
    label: "Reference",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "nRooms",
    label: "Number of rooms",
    uiType: FormType.Number,
    optional: false,
  },
  { name: "area", label: "area", uiType: FormType.Number, optional: false },
  { name: "floor", label: "floor", uiType: FormType.Number, optional: false },
  { name: "address", label: "Address", uiType: FormType.Text, optional: false },
  { name: "zip", label: "zip", uiType: FormType.Number, optional: false },
  { name: "city", label: "city", uiType: FormType.Text, optional: false },
  { name: "rent", label: "rent", uiType: FormType.Number, optional: false },
  { name: "charge", label: "charge", uiType: FormType.Number, optional: false },
  {
    name: "oldTenant",
    label: "oldTenant",
    uiType: FormType.Text,
    optional: false,
  },
  { name: "since", label: "since", uiType: FormType.Text, optional: false },
  { name: "visited", label: "visited", uiType: FormType.Text, optional: false },
  {
    name: "visitedWith",
    label: "visitedWith",
    uiType: FormType.Text,
    optional: false,
  },
  { name: "date", label: "date", uiType: FormType.Text, optional: false },
];

export default formDef;
