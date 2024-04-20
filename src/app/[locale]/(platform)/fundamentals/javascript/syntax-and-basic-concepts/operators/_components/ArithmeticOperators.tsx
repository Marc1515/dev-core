"use client";

import React from "react";

interface ItemsType {
  symbol: string;
  title: string;
  description: string;
}

interface ArithmeticOperatorsProps {
  data: {
    title: string;
    description: string;
    items: ItemsType[];
  };
}

export const ArithmeticOperators = ({ data }: ArithmeticOperatorsProps) => {
  return (
    /* Arithmetic Operators */
    <div>
      <span>{data.title}</span>
      <p>{data.description}</p>
      <ul>
        {data.items.map((item) => (
          <li key={item.title}>
            <p>
              <strong>
                {item.title} ({item.symbol})
              </strong>
              : {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
