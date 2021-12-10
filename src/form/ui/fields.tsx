import React from "react";

import * as Form from "../../common/form";
import FormUnit from "../unit";
import * as T from "../type";

import * as V from "@nexys/validation";

export interface UIFieldsProps<A> {
  formDef: T.FormDef<A>[];
  errors?: V.Type.ErrorOut | V.Type.Error;
  isLoading: boolean;
  data: Partial<A>;
  setData: (a: Partial<A>) => void;
}

const FormUI = <A,>({
  formDef,
  errors,
  isLoading,
  data,
  setData,
}: UIFieldsProps<A>) => (
  <>
    {formDef.map((fd, i) => {
      const name = fd.name;
      const errorUnit = errors && (errors as any)[name as string];
      return (
        <Form.Wrapper.Group errors={errorUnit} key={i} label={fd.label}>
          <FormUnit
            fd={fd}
            errors={errorUnit}
            value={data[fd.name]}
            onChange={(v) => setData({ ...data, [fd.name]: v })}
            disabled={isLoading}
          />
        </Form.Wrapper.Group>
      );
    })}
  </>
);

export default FormUI;
