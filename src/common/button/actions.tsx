import React from "react";

import * as T from "./type";
import Btn from "./btn";
import Icon from "../icon";

const actionToIcon = (action: T.Action) => {
  switch (action) {
    case "back":
      return "arrow-left";
    default:
      return action;
  }
};

const actionToText = (action: T.Action) => {
  switch (action) {
    case "back":
      return "Back";
    case "edit":
      return "Edit";
    default:
      return action;
  }
};

export const BtnAction = ({
  link,
  onClick,
  action,
}: {
  action: T.Action;
} & T.BtnCoreProps) => {
  const className = "btn btn-secondary btn-sm";

  const content = (
    <>
      <Icon name={actionToIcon(action)} /> {actionToText(action)}
    </>
  );

  return (
    <Btn onClick={onClick} link={link}>
      {content}
    </Btn>
  );
};

export const BtnBack = ({ link, onClick }: T.BtnCoreProps) => (
  <BtnAction action={"back"} onClick={onClick} link={link} />
);

export const BtnEdit = ({
  link,
  onClick,
}: {
  link?: string;
  onClick?: () => void;
}) => <BtnAction action={"edit"} onClick={onClick} link={link} />;

export default BtnAction;
