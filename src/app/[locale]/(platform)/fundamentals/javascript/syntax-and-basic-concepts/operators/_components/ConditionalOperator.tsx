"use client";

import React from "react";

interface ItemsType {
  description: string;
}

interface TernaryOperatorProps {
  data: {
    symbol: string;
    title: string;
    description: string;
    items: ItemsType[];
  };
}

export const TernaryOperator = ({ data }: TernaryOperatorProps) => {
  return (
    <div>
      <span>{data.title}</span>
      <p>
        <strong>{data.description}</strong>
      </p>
      <ul>
        {data.items.map((item) => (
          <li key={item.description}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};
