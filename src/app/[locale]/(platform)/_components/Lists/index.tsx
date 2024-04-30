import React from "react";

interface ListsProps {
  children: React.ReactNode;
}

/* List */
export const List = ({ children }: ListsProps) => {
  return <ul>{children}</ul>;
};

/* Item List */
export const ItemList = ({ children }: ListsProps) => {
  return <li>{children}</li>;
};
