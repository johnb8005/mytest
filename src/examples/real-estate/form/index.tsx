import React from "react";

import Card from "../../../common/card";
import * as Form from "../../../form";

import { Data } from "./type";
import formDef from "./def";

const getDefaultData = (): {} | undefined => {
  try {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const q = params["q"];
    const j = JSON.parse(atob(q));

    return j;
  } catch (err) {
    return {
      ref: "MyRef",
      nRooms: 3,
      area: 97,
      floor: 4,
      address: "Rtr4 stand",
      zip: 1260,
      city: "Nyon",
      rent: 1220,
      charge: 100,
      oldTenant: "old tenant",
      since: "2013",
      visited: "hier",
      visitedWith: "tenant",
      date: "juillet 2021",
    };
  }
};

/**
 * logic behind the form
 * the form is defined by a form definition
 * at the core there is a UI with the fields, wrappers etc. By default a Form UI is generared
 * once the form is sent, it is validated on the client side using the generated validator based on the form definitoin (can be overriden, if overriden keep in mind that the resulting object once validated must be of the actual shape)
 * it then goes through the `onSuccess` function which returns a Promise<void>
 */
export default () => {
  // get data from query
  const valDefault = getDefaultData();
  //

  const onSuccess = async (data: Data) => {
    //
    // wait 2 s

    const body = JSON.stringify(data);
    console.log(body);
    const headers = { "content-type": "application/json" };

    fetch("/api/rytz/generate", { method: "POST", body, headers })
      .then((res) => res.blob())
      .then((blob) => {
        // var file = window.URL.createObjectURL(blob);
        // window.location.assign(file);

        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.setAttribute("download", data.ref + ".pdf");
        a.click();
      });

    return Promise.resolve();
  };

  return (
    <div className={"grid grid-cols-2"}>
      <Card>
        <Form.Generator
          formDef={formDef}
          onSuccess={onSuccess}
          valueDefault={valDefault}
        />
      </Card>
    </div>
  );
};
