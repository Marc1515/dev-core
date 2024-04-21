"use client";

import React from "react";
import { TypeOperatorTypes } from "./types";

export const TypeOperators = ({ data }: TypeOperatorTypes) => {
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
