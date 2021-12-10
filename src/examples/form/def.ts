import { FormDefWView, FormType } from "../../form/type";

import { Data } from "./type";

const formDef: FormDefWView<Data>[] = [
  {
    name: "firstName",
    label: "FirstName",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "age",
    label: "Age",
    uiType: FormType.Number,
    optional: false,
  },
  {
    name: "married",
    label: "Is married",
    uiType: FormType.Toggle,
    optional: false,
  },
  {
    name: "description",
    label: "Description",
    uiType: FormType.Textarea,
    optional: true,
  },
  {
    name: "permit",
    label: "Permit",
    uiType: FormType.Select,
    options: [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ],
    optional: false,
  },
  {
    name: "permit2",
    label: "Permit2",
    uiType: FormType.SelectString,
    options: [
      { id: "A", name: "A" },
      { id: "B", name: "B" },
      { id: "B", name: "C" },
    ],
    optional: false,
  },
  {
    name: "permit3",
    label: "Permit3",
    uiType: FormType.SelectOptionSet,
    options: [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ],
    optional: false,
  },
  {
    name: "birthdate",
    label: "Birthdate",
    uiType: FormType.Datepicker,
    optional: false,
    render: (x) => "Birtdate: " + x.birthdate,
  },
];

export default formDef;
