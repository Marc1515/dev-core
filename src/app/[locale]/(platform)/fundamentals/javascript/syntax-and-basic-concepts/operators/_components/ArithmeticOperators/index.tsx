"use client";

import React from "react";
import { ArithmeticOperatorsTypes } from "./types";

export const ArithmeticOperators = ({ data }: ArithmeticOperatorsTypes) => {
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
