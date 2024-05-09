import React from "react";

interface ListsProps {
  children: React.ReactNode;
}

/* List */
export const List = ({ children }: ListsProps) => {
  return <ul>{children}</ul>;
};

/* List Title */
export const ListTitle = ({ children }: ListsProps) => {
  return <span className="block text-xl font-bold">{children}</span>;
};

/* Item List */
export const ItemList = ({ children }: ListsProps) => {
  return <li className="pt-10">{children}</li>;
};


/* List Title */
export const ItemListTitle = ({ children }: ListsProps) => {
  return <span className="block font-bold pb-5">{children}</span>;
};

/* List Title */
export const ItemListDescription = ({ children }: ListsProps) => {
  return <p>{children}</p>;
};
