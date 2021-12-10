import React from "react";
import * as Form from "../common/form";
import * as T from "./type";

const FormUnit = <A,>({
  fd,
  errors,
  value,
  onChange,
  disabled,
}: {
  fd: T.FormDef<A>;
  errors?: string[];
  value: any;
  disabled: boolean;
  onChange: (v: any) => void;
}): JSX.Element => {
  const commonProps = { errors, value, onChange, disabled };

  switch (fd.uiType) {
    case T.FormType.Select:
      if (!fd.options) {
        throw Error("for type select, options must be given");
      }
      return (
        <Form.Select.UI.ScalarCustom options={fd.options} {...commonProps} />
      );
    case T.FormType.SelectString:
      if (!fd.options) {
        throw Error("for type select, optins must be given");
      }
      return <Form.Select.UI.Scalar options={fd.options} {...commonProps} />;
    case T.FormType.SelectOptionSet:
      if (!fd.options) {
        throw Error("for type select, optins must be given");
      }
      return <Form.Select.UI.OptionSet options={fd.options} {...commonProps} />;
    case T.FormType.Text:
      return <Form.Input.Text {...commonProps} />;
    case T.FormType.Textarea:
      return <Form.Input.Textarea {...commonProps} />;
    case T.FormType.Number:
      return <Form.Input.Number {...commonProps} />;
    case T.FormType.Toggle:
      return <Form.Toggle {...commonProps} />;
    case T.FormType.Datepicker:
      return <Form.Input.Datepicker {...commonProps} />;
  }
};

export default FormUnit;
