import React from "react";

import Image from "next/image";

import { BurgerButton } from "./_components/BurgerButton";

export const MobileNavbar = () => {
  return (
    <div className="fixed top-0 pl-5 flex justify-between w-full z-20 bg-transparent backdrop-blur-sm">
      <Image src="/next.svg" alt="Next Icon" width={100} height={100} />
      <BurgerButton />
    </div>
  );
};
