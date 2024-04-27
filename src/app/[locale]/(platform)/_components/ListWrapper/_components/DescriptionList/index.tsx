import React from "react";

interface DescriptionListProps {
  children: React.ReactNode;
}

export const DescriptionList = ({ children }: DescriptionListProps) => {
  return <p>{children}</p>;
};
