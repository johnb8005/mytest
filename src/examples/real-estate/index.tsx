import React from "react";
import { Route, Switch } from "react-router-dom";

import RealEstate from "./form";
import RealEstateList from "./list";

import { linksApp } from "../../links";

export default () => {
  return (
    <Switch>
      <Route exact path={linksApp.realEstate.link} component={RealEstate} />
      <Route
        exact
        path={linksApp.realEstate.link + "/list"}
        component={RealEstateList}
      />
    </Switch>
  );
};
