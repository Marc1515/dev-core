"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useDarkModeContext } from "@/contexts/DarkModeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export const DarkModeButton = () => {
  const { isDarkActive, toggleDarkMode } = useDarkModeContext();

  return (
    <>
      <Button onClick={toggleDarkMode}>
        {!isDarkActive ? <MdOutlineLightMode /> : <MdDarkMode />}
      </Button>
    </>
  );
};
