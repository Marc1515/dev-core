"use client";

import React from "react";

interface DataType {
  title: string;
  description: string;
}

interface ArithmeticOperatorsProps {
  data: {
    title: string;
    description: string;
    items: DataType[];
  };
}

export const ArithmeticOperators = ({ data }: ArithmeticOperatorsProps) => {
  return (
    <div>
      <span>{data.title}</span>
      <p>{data.description}</p>
      <ul>
        {data.items.map((item) => (
          <li key={item.title}>
            <p>
              <strong>{item.title}: </strong>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
