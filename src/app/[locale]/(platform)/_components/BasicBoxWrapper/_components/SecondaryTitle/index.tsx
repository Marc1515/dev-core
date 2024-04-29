import React from "react";

interface SecondaryTitleProps {
  children: React.ReactNode;
}

export const SecondaryTitle = ({ children }: SecondaryTitleProps) => {
  return <span className="block text-xl font-bold pb-5">{children}</span>;
};
