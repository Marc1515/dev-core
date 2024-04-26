import React from "react";

interface CardsWrapperProps {
  children: React.ReactNode;
}

export const MainWrapperContent = ({ children }: CardsWrapperProps) => {
  return <div className="w-full h-full p-5 pt-10 bg-sky-600">{children}</div>;
};
