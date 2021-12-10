import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./examples/home";

import Layout from "./layout";
import Landing from "./landing";

import List from "./examples/list";
import Form from "./examples/form";
import Detail from "./examples/detail";
import Login from "./examples/login";
import Grid from "./examples/grid";
import View from "./examples/view";
import BusinessComponents from "./examples/business-components";
import RealEstate from "./examples/real-estate";
import UBSCC from "./examples/ubs-cc";
import Salt from "./examples/salt";
import UserJourney from "./examples/user-journey";
import Shop from "./examples/shop";

import { basename } from "./config";

import { links, linksApp } from "./links";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

const AppRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={linksApp.home.link} component={Home} />

        <Route exact path={linksApp.list.link} component={List} />
        <Route exact path={linksApp.form.link} component={Form} />
        <Route path={linksApp.detail.link} component={Detail} />
        <Route exact path={linksApp.grid.link} component={Grid} />
        <Route exact path={linksApp.view.link} component={View} />
        <Route
          exact
          path={linksApp.businessComponents.link}
          component={BusinessComponents}
        />
        <Route exact path={linksApp.ubsCC.link} component={UBSCC} />
        <Route exact path={linksApp.salt.link} component={Salt} />

        <Route path={linksApp.realEstate.link} component={RealEstate} />

        <Route path={linksApp.userJourney.link} component={UserJourney} />
        <Route path={linksApp.shop.link} component={Shop} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default () => {
  return (
    <Router basename={basename}>
      <Switch>
        <Route exact path={links.landing.link} component={Landing} />
        <Route exact path={links.login.link} component={Login} />
        <AppRouter />
      </Switch>
    </Router>
  );
};
