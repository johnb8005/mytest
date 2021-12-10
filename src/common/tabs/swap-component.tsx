import React from "react";

import Simple from "./simple";

const Nav = ({
  navs,
  option = 0,
}: {
  navs: { name: string; Component: JSX.Element }[];
  option?: number;
}) => {
  const [selected, setSelected] = React.useState<number>(option);

  const NavHeader = Simple(navs);

  const navSelected = navs[selected];

  if (!navSelected) {
    throw Error("selected item does not exist");
  }

  return (
    <>
      <NavHeader option={selected} onClick={(i) => setSelected(i)} />
      {navSelected.Component}
    </>
  );
};

export default Nav;
