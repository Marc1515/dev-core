"use client";

import React from "react";

import { DataTypesTypes } from "./types";

export const DataTypes = ({ data }: DataTypesTypes) => {
  return (
    <div>
      {/* Introduction */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Each Data Type */}
      {data.types.map((item, index) => (
        <div key={index}>
          {/* Introduction */}
          <span>{item.title}</span>
          <p>{item.description}</p>
          {/* Each Type */}
          <ul>
            {item.items.map((item, index) => (
              <li key={index}>
                <p>
                  <strong>{item.title}: </strong>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
