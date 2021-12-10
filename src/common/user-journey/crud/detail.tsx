import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

import * as FormToggle from "../../../form/toggle";
import { FormDef } from "../../../form/type";
import { DetailDataInterface, ExtraUnit } from "./type";

// ilustrate easy crud with list
const Detail = <A,>({
  dataInterface: { update, deleteByUuid, detail },
  formDef,
  urlPrefix,
  extraComponents,
}: {
  dataInterface: DetailDataInterface<A>;
  formDef: FormDef<A>[];
  urlPrefix: string;
  extraComponents: ExtraUnit<A>[];
}) => {
  const { uuid } = useParams<{ uuid?: string }>();

  if (!uuid) {
    throw Error("uuid is not defined");
  }

  return (
    <>
      <FormToggle.WData<A>
        urlPrefix={urlPrefix + "/" + uuid + "/detail"}
        formDef={formDef}
        update={(data: A) => update(uuid, data)}
        onDelete={
          deleteByUuid &&
          (async () =>
            deleteByUuid(uuid).then(() => ({ urlRedirect: urlPrefix })))
        }
        getData={() => detail(uuid)}
        extraComponents={extraComponents}
      />

      <br />
      <p>
        <Link to={urlPrefix}>
          <ArrowCircleLeftIcon className={"text-blue-500"} width={"1em"} />
        </Link>
      </p>
    </>
  );
};

export default Detail;
