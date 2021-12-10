import React from "react";
import { PhoneIcon } from "@heroicons/react/outline";
import * as T from "./type";

export const sanitizePhone = (p: string) => {
  const m = p.replace("(0)", "").replace(/[^\d]/g, "");
  if (m.slice(0, 2) !== "41") {
    return "41" + m.slice(1);
  }

  return m;
};

export const findNumber = (s: string): JSX.Element => {
  const m = s.match(/[0\+][\d\s.\/\(\)]+\d/);
  if (m) {
    const phoneSanitized = sanitizePhone(m[0]);
    //"https://wa.me/" +
    const tel = (
      <a
        target={"_blank"}
        href={`https://web.whatsapp.com/send?phone=${phoneSanitized}&text&app_absent=0`}
      >
        <PhoneIcon height={"20"} className={"text-blue-500"} />
      </a>
    );

    return (
      <span>
        {tel} {s}
      </span>
    );
  }

  return <span>{s}</span>;
};

export const getFloor = (s: string) => {
  const m = s.match(/(\d+)[erm]{2,3}-etage/);

  if (m && m.length > 1) {
    return Number(m[1]);
  }

  return 1;
};

export const getPartialData = (x: T.Data) => {
  return {
    ref: x.name,
    nRooms: x.attributes.rooms,
    area: x.attributes.area,
    floor: getFloor(x.url),
    address: (x.addresses[1] || "")
      .replace(x.location.zip, "")
      .replace(x.location.city, ""),
    zip: Number(x.location.zip),
    city: x.location.city,
    rent: x.price,
    date: formatDate(),
    visited: "hier",
    visitedWith: "avec le locataire actuel",
  };
};

export const formatDate = (da: Date = new Date()) => {
  const [y, m, d] = da.toISOString().slice(0, 10).split("-");
  return [d, m, y].join("/");
};
