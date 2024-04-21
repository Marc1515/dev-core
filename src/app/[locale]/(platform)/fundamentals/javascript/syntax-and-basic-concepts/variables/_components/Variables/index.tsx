"use client";

import React from "react";
import { VariablesTypes } from "./types";

export const Variables = ({ data }: VariablesTypes) => {
  return (
    <div>
      {/* Variables */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <span>{data.main_function.title}</span>
      <p>{data.main_function.description}</p>

      <span>{data.importance.title}</span>
      <ul>
        {data.importance.items.map((item, idx) => (
          <li key={idx}>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
