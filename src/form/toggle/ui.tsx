import React from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../common/view/layout";
import View from "./view";
import Form from "./form";

import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

import { ToggleProps } from "./type";

const Toggle = <A,>({
  data: dataIn,
  title,
  subtitle,
  update,
  onDelete,
  formDef,
}: ToggleProps<A>) => {
  const history = useHistory();
  const [isForm, setForm] = React.useState<boolean>(false);
  const [data, setData] = React.useState<A>(dataIn);

  const handleSuccess = async (data: A) => {
    await update(data);

    setForm(false);
    setData(data);

    return;
  };

  const actions = [];

  if (!isForm) {
    actions.push({
      name: <PencilIcon className={"text-blue-500"} width={"1em"} />,
      onClick: () => setForm(!isForm),
    });

    if (onDelete) {
      actions.push({
        name: <TrashIcon className={"text-blue-500"} width={"1em"} />,
        onClick: () => {
          if (confirm("are you sure you wouyld like to delete this entry")) {
            onDelete().then(
              (x) => x.urlRedirect && history.push(x.urlRedirect)
            );
          }
        },
      });
    }
  }

  return (
    <Layout title={title} subtitle={subtitle} actions={actions}>
      {isForm ? (
        <Form<A> formDef={formDef} data={data} onSuccess={handleSuccess} />
      ) : (
        !isForm && <View<A> formDef={formDef} data={data} />
      )}
    </Layout>
  );
};

export default Toggle;
