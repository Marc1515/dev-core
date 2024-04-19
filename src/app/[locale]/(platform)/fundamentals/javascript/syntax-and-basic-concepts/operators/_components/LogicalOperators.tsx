"use client";

import React from "react";

interface ItemsType {
  symbol: string;
  title: string;
  description: string;
}

interface LogicalOperatorsProps {
  data: {
    title: string;
    description: string;
    items: ItemsType[];
  };
}

export const LogicalOperators = ({ data }: LogicalOperatorsProps) => {
  return (
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
