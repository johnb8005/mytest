import React from "react";

import ToastUnit from "./unit";
import * as Ctx from "../context";
import { NotificationType, ToastProp } from "../type";

const Toast = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  const toasts: ToastProp[] = notifications
    .filter((x) => x.type === NotificationType.toast)
    .map((x) => {
      return { title: "Success!", content: x.text, timestring: "" };
    });

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`absolute bottom-10 right-5 min-h-40`}
    >
      <div className="absolut top-0 right-10">
        {toasts.map((t, i) => (
          <ToastUnit key={i} idx={i} onDismiss={rmNotification} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Toast;
