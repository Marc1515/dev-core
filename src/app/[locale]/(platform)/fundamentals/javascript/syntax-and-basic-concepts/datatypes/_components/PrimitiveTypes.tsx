"use client";
import React from "react";

interface DataType {
  title: string;
  description: string;
}

interface PrimitiveTypesProps {
  data: {
    title: string;
    description: string;
    items: DataType[];
  };
}

export const PrimitiveTypes = ({ data }: PrimitiveTypesProps) => {
  return (
    /* Primitive Types */
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
