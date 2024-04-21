"use client";

import React from "react";
import { LogicalOperatorsTypes } from "./types";

export const LogicalOperators = ({ data }: LogicalOperatorsTypes) => {
  return (
    /* Logical Operators */
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
