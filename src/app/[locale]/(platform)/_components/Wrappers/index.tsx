"use client";

import React from "react";

import { useDarkModeContext } from "@/contexts/DarkModeContext";

interface WrappersProps {
  children: React.ReactNode;
}

/* Main Wrapper Content */
export const MainWrapperContent = ({ children }: WrappersProps) => {
  return (
    <div className="w-full h-full p-5 pt-20 dark:bg-custom-gradient bg-custom-gradient transition-all duration-500">
      {children}
    </div>
  );
};

/* Basic Box Wrapper */
export const BasicBoxWrapper = ({ children }: WrappersProps) => {
  return <div className="py-5">{children}</div>;
};

/* Cards Wrapper */
export const CardsWrapper = ({ children }: WrappersProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-5 justify-evenly">
      {children}
    </div>
  );
};

/* List Wrapper */
export const ListWrapper = ({ children }: WrappersProps) => {
  return <div className="w-full h-full py-5">{children}</div>;
};

/* Code Wrapper */
export const CodeWrapper = ({ children }: WrappersProps) => {
  return (
    <div className="flex pl-5 pb-5 mb-10 codeWrapperShadow">{children}</div>
  );
};

/* CodeBox */
export const CodeBox = ({ children }: WrappersProps) => {
  return <pre className="w-full overflow-x-auto">{children}</pre>;
};
