import React from "react";

import * as Form from "../../form";

import { Context, Type } from "../../common/notifications";

import { Data } from "./type";
import formDef from "./def";

/**
 * logic behind the form
 * the form is defined by a form definition
 * at the core there is a UI with the fields, wrappers etc. By default a Form UI is generared
 * once the form is sent, it is validated on the client side using the generated validator based on the form definitoin (can be overriden, if overriden keep in mind that the resulting object once validated must be of the actual shape)
 * it then goes through the `onSuccess` function which returns a Promise<void>
 */
export default () => {
  const { setNotifications } = Context.useToastContext();

  // special onSuccess function - simulates a backend
  // if the "is married" checkbox is ticked, form is succesful
  // else errors will be displayed
  const onSuccess = async (data: Data) => {
    //
    // wait 2 s
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 sec
    if (data.married) {
      setNotifications([
        {
          text: "You successfully saved your data",
          type: Type.NotificationType.banner,
        },
        {
          text: "bla",
          type: Type.NotificationType.toast,
        },
      ]);
      return Promise.resolve(console.log(data));
    }

    return Promise.reject({
      description: ["a description must be entered", "backend validation"],
      married: ["this must be accepted"],
    });
  };

  return (
    <Form.Generator
      formDef={formDef}
      onSuccess={onSuccess}
      valueDefault={{
        permit: 1,
        permit2: "1",
        permit3: { id: 1, name: "f" },
        firstName: "fds",
        age: 2,
      }}
    />
  );
};
