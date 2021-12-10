import React from "react";

import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
  CheckIcon,
} from "@heroicons/react/solid";

import Headings from "../../common/page-headings";

export default () => {
  return (
    <Headings
      actions={[
        { label: "Edit", Icon: LocationMarkerIcon, to: "/" },
        { label: "View", Icon: LocationMarkerIcon, to: "/" },
        {
          label: "Publish",
          Icon: CheckIcon,
          to: "/",
          isPrimary: true,
        },
      ]}
      metas={[
        { label: "Full-time", Icon: BriefcaseIcon },
        { label: "Remote", Icon: LocationMarkerIcon },
        { label: "$120k-$140k", Icon: CurrencyDollarIcon },
        { label: "Closing in December", Icon: CalendarIcon },
      ]}
      title={"hello"}
    />
  );
};
