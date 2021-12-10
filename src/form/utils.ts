import * as T from "./type";
import * as V from "@nexys/validation";

export const uiTypeToVType = (t: T.FormType): V.Type.FieldType => {
  switch (t) {
    case T.FormType.Number:
      return "number";
    case T.FormType.Text:
    case T.FormType.Textarea:
    case T.FormType.Datepicker:
      return "string";
    case T.FormType.Toggle:
      return "boolean";
    case T.FormType.Select:
      return "number";
    case T.FormType.SelectString:
      return "string";
    case T.FormType.SelectOptionSet:
      return "object";
  }
};

const getExtraCheck = (
  t: T.FormType
): ((s: any) => string[] | undefined) | undefined => {
  switch (t) {
    case T.FormType.Datepicker:
      return isDate;
  }

  return;
};

export const generateValidatorFromDef = <A>(df: T.FormDef<A>[]) => {
  const v: V.Type.Shape = {};

  df.forEach((f) => {
    switch (f.uiType) {
      case T.FormType.SelectOptionSet: {
        v[f.name as string] = {
          optional: false,
          $object: { id: { type: "number" }, name: {} },
        };
      }
      default: {
        v[f.name as string] = {
          optional: f.optional,
          type: uiTypeToVType(f.uiType),
          extraCheck: getExtraCheck(f.uiType),
        };
      }
    }
  });

  return v;
};

const isDate = (s: string) => {
  const [y, m, d] = s.split(/-/g);

  const ny = Number(y);
  const nm = Number(m);
  const nd = Number(d);

  const err: string[] = [];

  if (y.length != 4) {
    err.push("year must be of length 4");
  }

  if (m.length != 2) {
    err.push("month must be of length 2");
  }

  if (d.length != 2) {
    err.push("day must be of length 2");
  }

  if (isNaN(ny)) {
    err.push("year must be valid");
  }

  if (isNaN(nm) && nm > 0 && nm < 13) {
    err.push("month must be valid");
  }

  if (isNaN(nd) && nd > 0 && nd < 32) {
    err.push("day must be valid");
  }

  if (err.length > 0) {
    return err;
  }

  return;
};
