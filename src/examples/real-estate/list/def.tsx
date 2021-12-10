import { Definition } from "@nexys/core-list/dist/types";
import React from "react";

import DataLoad from "../../../common/data-load";
import List, { UI } from "../../../common/list";

import { LinkIcon, ExternalLinkIcon } from "@heroicons/react/outline";

import { Data } from "./type";

import * as U from "./utils";

const def: Definition<Data> = [
  {
    name: "images",
    label: "Image",
    render: (x) =>
      x.images.length > 0 ? (
        <ul>
          {x.images.map((image) => (
            <li>
              <a
                target={"_blank"}
                href={"https://www.spg-rytz.ch" + image.full_image}
              >
                <img src={image.path} />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      ),
  },
  { name: "name", label: "Name" },
  { name: "price", label: "Price", render: (x) => <span>{x.price} CHF</span> },
  {
    name: "addresses",
    label: "Address",
    render: (x) => U.findNumber(x.addresses[0]),
  },
  {
    name: "attributes",
    label: "Attributes",
    render: (x) => (
      <ul>
        <li>Area: {x.attributes.area} m2</li>
        <li>Rooms: {x.attributes.rooms}</li>
        <li>
          Bed/bathrooms: {x.attributes.bedrooms}/{x.attributes.bathrooms}
        </li>
        <li>Floor: {U.getFloor(x.url)}</li>
      </ul>
    ),
  },
  {
    name: "addresses",
    label: "Address",
    render: (x) => {
      if (x.addresses.length > 1) {
        return <span>{x.addresses[1]}</span>;
      }
      return null;
    },
  },
  {
    name: "url",
    label: "Link",
    render: (x) => (
      <a href={x.url} target={"_blank"}>
        <ExternalLinkIcon height={20} className={"text-blue-500"} />
      </a>
    ),
  },
  {
    name: "url",
    label: "Link",
    render: (x) => {
      const data = U.getPartialData(x);
      const edata = btoa(JSON.stringify(data));
      return (
        <a href={"/real-estate?q=" + edata} target={"_blank"}>
          <LinkIcon height={20} className={"text-blue-500"} />
        </a>
      );
    },
  },
];

export default def;
