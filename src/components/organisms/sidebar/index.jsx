import React from "react";
import { Menu } from "../../molecules";

const Sidebar = () => {
  return (
    <sidebar
      className={"col-span-4  lg:col-span-4  xl:col-span-3 2xl:col-span-2"}
    >
      <Menu />
    </sidebar>
  );
};

export default Sidebar;
