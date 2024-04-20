"use client";

import React from "react";

interface StringOperatorProps {
  data: {
    symbol: string;
    title: string;
    description: string;
  };
}

export const StringOperator = ({ data }: StringOperatorProps) => {
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
