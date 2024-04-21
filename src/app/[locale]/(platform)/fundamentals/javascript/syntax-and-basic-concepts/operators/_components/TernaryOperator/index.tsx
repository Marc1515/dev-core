"use client";

import React from "react";
import { TernaryOperatorTypes } from "./types";

export const TernaryOperator = ({ data }: TernaryOperatorTypes) => {
  return (
    /* Ternary Operator */
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
