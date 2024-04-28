import React from "react";

interface DescriptionItemListProps {
  children: React.ReactNode;
}

export const DescriptionItemList = ({ children }: DescriptionItemListProps) => {
  return <p>{children}</p>;
};
