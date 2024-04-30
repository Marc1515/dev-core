import React from "react";

interface WrappersProps {
  children: React.ReactNode;
}

/* Main Wrapper Content */
export const MainWrapperContent = ({ children }: WrappersProps) => {
  return (
    <div className="w-full h-full p-5 pt-[6rem] bg-sky-600">{children}</div>
  );
};

/* Basic Box Wrapper */
export const BasicBoxWrapper = ({ children }: WrappersProps) => {
  return <div className="pb-10">{children}</div>;
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
  return <pre className="overflow-x-auto">{children}</pre>;
};
