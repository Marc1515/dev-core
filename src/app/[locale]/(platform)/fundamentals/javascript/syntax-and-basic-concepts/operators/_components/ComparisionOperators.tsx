"use client";

import React from "react";

interface ItemsType {
  symbol: string;
  title: string;
  description: string;
}

interface ComparisionOperatorsProps {
  data: {
    title: string;
    description: string;
    items: ItemsType[];
  };
}

export const ComparisionOperators = ({ data }: ComparisionOperatorsProps) => {
  return (
    /* Comparision Operators */
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
