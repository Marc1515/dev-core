import React from "react";
import { BurgerButton } from "../BurgerButton";

export const MobileNavbar = () => {
  return (
    <div className="fixed top-0 flex justify-end w-full z-20 bg-transparent backdrop-blur-sm">
      <BurgerButton />
    </div>
  );
};
