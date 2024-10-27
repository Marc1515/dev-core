"use client";

import { useBurgerButtonContext } from "@/contexts/BurgerButtonContext";
import React from "react";

export const BurgerButton = () => {
  const { isActive, toggleBurgerButton } = useBurgerButtonContext();

  return (
    <div className="relative top-0 right-0 p-4 md:hidden">
      <button className="relative group" onClick={toggleBurgerButton}>
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 ${
            isActive ? "active:ring-8 focus:ring-4" : ""
          } ring-opacity-30 duration-200 shadow-md`}
        >
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={`dark:bg-white bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isActive ? "translate-x-10" : ""
              }`}
            ></div>
            <div
              className={`dark:bg-white bg-black h-[2px] w-7 rounded transform transition-all duration-300 ${
                isActive ? "translate-x-10" : ""
              } delay-75`}
            ></div>
            <div
              className={`dark:bg-white bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isActive ? "translate-x-10" : ""
              } delay-150`}
            ></div>

            <div
              className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
                isActive ? "-translate-x-0 w-12" : "-translate-x-10 w-0"
              }`}
            >
              <div
                className={`absolute dark:bg-white bg-black h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                  isActive ? "rotate-45" : ""
                }`}
              ></div>
              <div
                className={`absolute dark:bg-white bg-black h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                  isActive ? "-rotate-45" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
