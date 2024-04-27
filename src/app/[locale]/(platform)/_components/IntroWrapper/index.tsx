import React from "react";

interface IntroWrapperProps {
  children: React.ReactNode;
}

export const IntroWrapper = ({ children }: IntroWrapperProps) => {
  return <div className="pb-10">{children}</div>;
};
