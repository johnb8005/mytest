import React from "react";
import * as Ctx from "../context";

import BannerUI from "../../banner";

import { NotificationType } from "../type";

interface Banner {
  text: string;
}

const Banner = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  const banners: Banner[] = notifications
    .filter((x) => x.type === NotificationType.banner)
    .map((x) => {
      return { text: x.text };
    });

  return (
    <>
      {banners.map((banner, i) => (
        <BannerUI
          key={i}
          label={banner.text}
          onDismiss={() => rmNotification(i)}
        />
      ))}
    </>
  );
};

export default Banner;
