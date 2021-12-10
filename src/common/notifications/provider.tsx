import React from "react";
import Ctx from "./context";
import Toast from "./toast";
import Banner from "./banner";
import { Notification } from "./type";

export const Provider = ({ children }: { children: any }) => {
  const [notifications, setNotificationsInner] = React.useState<Notification[]>(
    []
  );

  const rmNotification = (idx: number) => {
    const ts = notifications.filter((_x, j) => j !== idx);
    setNotifications(ts);
  };

  const setNotification = (t: Notification) => {
    console.log(t);
    setNotifications([...notifications, t]);
  };

  const setNotifications = (t: Notification[]) => {
    console.log(t);
    setNotificationsInner([...notifications, ...t]);
  };

  /*const banners: Banner[] = notifications
    .filter((x) => x.type === NotificationType.banner)
    .map((x) => {
      return { text: x.text };
    });*/

  return (
    <Ctx.Provider
      value={{
        setNotification,
        setNotifications,
        rmNotification,
        notifications,
      }}
    >
      <Banner />
      {children}
      <Toast />
    </Ctx.Provider>
  );
};

export default Provider;
