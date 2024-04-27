import React from "react";

interface IntroDescriptionProps {
  children: React.ReactNode;
}

export const IntroDescription = ({ children }: IntroDescriptionProps) => {
  return <p>{children}</p>;
};
