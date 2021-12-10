import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

import { FormDef } from "../../../form/type";
import FormGenerator from "../../../form/generator";

// ilustrate easy crud with list
const Insert = <A,>({
  insert,
  formDef,
  urlPrefix,
}: {
  insert: (data: A) => Promise<{ urlRedirect?: string }>;
  formDef: FormDef<A>[];
  urlPrefix: string;
}) => {
  const history = useHistory();
  const onSuccess = async (data: A) => {
    const { urlRedirect } = await insert(data);
    if (urlRedirect) {
      history.push(urlRedirect);
    }
  };

  return (
    <>
      <FormGenerator<A> formDef={formDef} onSuccess={onSuccess} />
      <br />
      <p>
        <Link to={urlPrefix}>
          <ArrowCircleLeftIcon className={"text-blue-500"} width={"1em"} />
        </Link>
      </p>
    </>
  );
};

export default Insert;
