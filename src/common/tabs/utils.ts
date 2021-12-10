import * as T from "./type";

export const toHref = (l: T.Link, urlPrefix: string) => {
  const path: string =
    l.link || l.link === "" ? l.link : "/" + l.label.toLowerCase();

  return urlPrefix + path;
};

export const getIsSelected = (
  pathname: string,
  path: string,
  navs: { path: string }[]
) => {
  // 1 search at current level and see it it matches one of the pat
  const f = navs.find((x) => pathname === x.path);

  if (f) {
    return pathname === path;
  }

  // if not found
  // find all paths that are included in the pathname ( current location)
  const isIncludedArray = navs
    .filter((x) => pathname.includes(x.path))
    // sort by path length, t get the first of the list as the longest path which will be the only one retained
    .sort((a, b) => b.path.length - a.path.length);

  // if array contains more than 0 items
  if (isIncludedArray.length > 0) {
    // check if the first item (longest path) matches the observed path
    return isIncludedArray[0].path === path;
  }

  // if none found, return 0
  return false;
};
