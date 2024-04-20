"use client";

import React from "react";
import { ObjectTypesData } from "./types";

export const ObjectTypes = ({ data }: ObjectTypesData) => {
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
