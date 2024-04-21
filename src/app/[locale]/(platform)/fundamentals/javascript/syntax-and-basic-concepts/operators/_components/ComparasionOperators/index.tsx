"use client";

import React from "react";
import { ComparasionOperatorsTypes } from "./types";

export const ComparisionOperators = ({ data }: ComparasionOperatorsTypes) => {
  return (
    /* Comparision Operators */
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
