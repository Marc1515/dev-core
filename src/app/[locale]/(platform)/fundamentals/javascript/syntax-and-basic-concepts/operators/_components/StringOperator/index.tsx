"use client";

import React from "react";
import { StringOperatorTypes } from "./types";

export const StringOperator = ({ data }: StringOperatorTypes) => {
  return (
    /* String Operator */
    <div>
      <span>{data.title}</span>
      <ul>
        <li>
          <p>
            <strong>({data.symbol})</strong> : {data.description}
          </p>
        </li>
      </ul>
    </div>
  );
};
