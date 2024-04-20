"use client";

import React from "react";

interface ItemsType {
  title: string;
  description: string;
}

interface TypeOperators {
  data: {
    title: string;
    description: string;
    items: ItemsType[];
  };
}

export const TypeOperators = ({ data }: TypeOperators) => {
  return (
    /* Type Operators */
    <div>
      <span>{data.title}</span>
      <p>{data.description}</p>
      <ul>
        {data.items.map((item) => (
          <li key={item.title}>
            <p>
              <strong>{item.title}: </strong> {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
