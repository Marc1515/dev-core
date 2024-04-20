"use client";

import React from "react";
import { PrimitiveTypesData } from "./types";

export const PrimitiveTypes = ({ data }: PrimitiveTypesData) => {
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
