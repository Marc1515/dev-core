"use client";

import React from "react";

interface WrappersProps {
  children: React.ReactNode;
}

/* Main Wrapper Content */
export const MainWrapperContent = ({ children }: WrappersProps) => {
  return (
    <div className="w-full h-full p-5 pt-52 dark:bg-custom-gradient bg-custom-gradient transition-all duration-500">
      {children}
    </div>
  );
};

/* Basic Box Wrapper */
export const BasicBoxWrapper = ({ children }: WrappersProps) => {
  return <div className="pt-40">{children}</div>;
};

/*First Idx Box Wrapper */
export const FirstIdxBoxWrapper = ({ children }: WrappersProps) => {
  return <div className="pt-20">{children}</div>;
};

/*Second Idx Box Wrapper */
export const SecondIdxBoxWrapper = ({ children }: WrappersProps) => {
  return <div className="pt-10">{children}</div>;
};

/* Cards Wrapper */
export const CardsWrapper = ({ children }: WrappersProps) => {
  return (
    <div className="w-full pt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
};

/* List Wrapper */
export const ListWrapper = ({ children }: WrappersProps) => {
  return <div className="w-full h-full pt-10">{children}</div>;
};
