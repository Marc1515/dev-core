import React from "react";

interface TitleItemListProps {
  children: React.ReactNode;
}

export const TitleItemList = ({ children }: TitleItemListProps) => {
  return (
    <span>
      <strong>{children}</strong>
    </span>
  );
};
