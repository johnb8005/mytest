import React from "react";
import { Link } from "react-router-dom";
import DataLoad from "../../data-load";
import { DefinitionItem } from "@nexys/core-list/dist/types";
import { PlusCircleIcon } from "@heroicons/react/outline";
import UIList from "./ui-list";

export default <A extends { uuid: string }>({
  list,
  formDef,
  urlAdd,
  urlPrefix,
}: {
  list: () => Promise<A[]>;
  formDef: DefinitionItem<A>[];
  urlAdd: string;
  urlPrefix: string;
}) => (
  <>
    <DataLoad
      Component={(p) => (
        <UIList urlPrefix={urlPrefix} data={p.data} formDef={formDef} />
      )}
      getData={list}
    />
    <br />
    {urlAdd && (
      <p>
        <Link to={urlAdd}>
          <PlusCircleIcon className={"text-blue-500"} width={"1em"} />
        </Link>
      </p>
    )}
  </>
);
