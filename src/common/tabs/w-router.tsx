import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import * as T from "./type";
import * as U from "./utils";

const Nav = ({
  navs,
  option,
}: {
  navs: T.LinkAndComponentAndPath[];
  option: number;
}) => (
  <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
    {navs.map((nav, i) => {
      const { pathname } = useLocation();
      const isSelected = U.getIsSelected(pathname, nav.path, navs);

      const classInactive =
        "px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50";
      const classActive =
        "px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50";

      return (
        <li key={i} className={i === option ? classActive : classInactive}>
          <Link
            className={`nav-link ${isSelected ? "active" : ""}`}
            to={nav.path}
          >
            {nav.label}
          </Link>
        </li>
      );
    })}
  </ul>
);

const Router = ({ navs }: { navs: T.LinkAndComponentAndPath[] }) => (
  <Switch>
    {navs.map((l, i) => (
      <Route key={i} path={l.path} component={l.Component} />
    ))}
  </Switch>
);

export default ({
  navs,
  urlPrefix = "",
  option = 0,
}: {
  navs: Omit<T.LinkAndComponentAndPath, "path">[];
  urlPrefix?: string;
  option?: number;
}) => {
  const list: T.LinkAndComponentAndPath[] = navs.map((x, i) => {
    const path = U.toHref(x, urlPrefix);

    if (window.location.pathname.match(new RegExp("^" + path))) {
      option = i;
    }

    return { path, ...x };
  });

  // for the router, sort by path length, to start with the longest to the shortest path to avoid path confusion then and no need to use `exact=true`
  // the [...] is needed to avoid interfering with the other components, ie a copy is necessary
  const listRouter = [...list].sort((a, b) => b.path.length - a.path.length);

  return (
    <>
      <Nav option={option} navs={list} />
      <Router navs={listRouter} />
    </>
  );
};
