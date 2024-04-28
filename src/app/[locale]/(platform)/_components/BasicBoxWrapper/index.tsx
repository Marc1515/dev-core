import React from "react";

interface BasicBoxWrapperProps {
  children: React.ReactNode;
}

export const BasicBoxWrapper = ({ children }: BasicBoxWrapperProps) => {
  return <div className="pb-10">{children}</div>;
};
