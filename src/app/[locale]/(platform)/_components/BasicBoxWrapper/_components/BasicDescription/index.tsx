import React from "react";

interface BasicDescriptionProps {
  children: React.ReactNode;
}

export const BasicDescription = ({ children }: BasicDescriptionProps) => {
  return <p>{children}</p>;
};
