import React from "react";
import { NavItem } from "./nav-item";

export const Navbar = () => {
  return (
    <nav className="w-full h-14 top-0 border-b border-white ">
      <div className="flex">
        <NavItem />
      </div>
    </nav>
  );
};
