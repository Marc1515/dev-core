"use client";

import React from "react";

interface DataType {
  title: string;
  description: string;
}

interface ObjectTypesProps {
  data: {
    title: string;
    description: string;
    items: DataType[];
  };
}

export const ObjectTypes = ({ data }: ObjectTypesProps) => {
  return (
    /* Object Types */
    <div>
      <span>{data.title}</span>
      <p>{data.description}</p>
      {
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
      }
    </div>
  );
};
