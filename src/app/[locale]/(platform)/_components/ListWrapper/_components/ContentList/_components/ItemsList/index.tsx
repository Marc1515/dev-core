import React from "react";

interface ItemListProps {
  children: React.ReactNode;
}

export const ItemList = ({ children }: ItemListProps) => {
  return <li>{children}</li>;
};
