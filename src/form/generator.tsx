import React, { useState } from "react";

import * as V from "@nexys/validation";

import * as T from "./type";
import * as U from "./utils";

import UIFieldsDefault, { UIFieldsProps } from "./ui/fields";
import UISubmitDefault, { UISUbmitProps } from "./ui/submit";

interface FormGeneratorProps<A> {
  formDef: T.FormDef<A>[];
  onSuccess: (v: A) => Promise<void>;
  valueDefault?: Partial<A>;
  errors?: V.Type.ErrorOut | V.Type.Error;
  submit?: { label: string };
  UIFields?: (props: UIFieldsProps<A>) => JSX.Element;
  UISubmit?: (props: UISUbmitProps) => JSX.Element;
  validator?: V.Type.Shape;
  //  Wrapper: ({ label, children, errors }: WrapperProps) => JSX.Element;
}

const FormGenerator = <A,>({
  formDef,
  onSuccess,
  valueDefault = {},
  errors: errorsDefault,
  submit = { label: "Submit" },
  UIFields = UIFieldsDefault,
  UISubmit = UISubmitDefault,
  validator = U.generateValidatorFromDef(formDef),
}: //Wrapper = Form.Wrapper.Group,
FormGeneratorProps<A>) => {
  const [data, setData] = useState<Partial<A>>(valueDefault);
  const [errors, setErrors] = useState<
    V.Type.ErrorOut | V.Type.Error | undefined
  >(errorsDefault);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    console.log(data);
    const v = V.Main.checkObject(data, validator);
    setErrors(v);
    console.log(v);

    // no errors found
    if (Object.values(v).length === 0) {
      console.log("j");
      setLoading(true);

      try {
        await onSuccess(data as A);
      } catch (err) {
        setErrors(err);
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={(v) => handleSubmit(v)}>
      <UIFields
        data={data}
        setData={setData}
        errors={errors}
        isLoading={isLoading}
        formDef={formDef}
      />

      <UISubmit isLoading={isLoading} label={submit.label} />
    </form>
  );
};

export default FormGenerator;
