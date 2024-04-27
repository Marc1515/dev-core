import React from "react";

interface TitleListProps {
  children: React.ReactNode;
}

export const TitleList = ({ children }: TitleListProps) => {
  return <span>{children}</span>;
};
