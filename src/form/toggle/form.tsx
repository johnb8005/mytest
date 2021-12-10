import React from "react";

import * as FormInner from "../index";
import { FormDef } from "../type";

/**
 * logic behind the form
 * the form is defined by a form definition
 * at the core there is a UI with the fields, wrappers etc. By default a Form UI is generared
 * once the form is sent, it is validated on the client side using the generated validator based on the form definitoin (can be overriden, if overriden keep in mind that the resulting object once validated must be of the actual shape)
 * it then goes through the `onSuccess` function which returns a Promise<void>
 */
const Form = <A,>({
  data,
  formDef,
  onSuccess,
}: {
  data: A;
  formDef: FormDef<A>[];
  onSuccess: (data: A) => Promise<void>;
}) => {
  return (
    <div className={"p-6"}>
      <FormInner.Generator
        formDef={formDef}
        onSuccess={onSuccess}
        valueDefault={data}
      />
    </div>
  );
};

export default Form;
