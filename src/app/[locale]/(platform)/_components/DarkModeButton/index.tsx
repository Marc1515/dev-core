"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Button
        onClick={() => setDarkMode(!darkMode)}
        className="text-foreground dark:text-foreground dark:bg-custom-gradient bg-custom-gradient"
      >
        {!darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </Button>
    </>
  );
};
