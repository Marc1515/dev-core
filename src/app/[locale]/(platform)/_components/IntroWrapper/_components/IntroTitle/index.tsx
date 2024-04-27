import React from "react";

interface IntroTitleProps {
  children: React.ReactNode;
}

export const IntroTitle = ({ children }: IntroTitleProps) => {
  return <h1 className="text-3xl font-bold pb-5">{children}</h1>;
};
