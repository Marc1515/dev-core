"use client";

import React from "react";
import { AssignmentOperatorsTypes } from "./types";

export const AssignmentOperators = ({ data }: AssignmentOperatorsTypes) => {
  return (
    /* Assignment Operators */
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
