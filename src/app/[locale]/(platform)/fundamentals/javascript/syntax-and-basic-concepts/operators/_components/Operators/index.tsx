"use client";

import React from "react";

import { OperatorsTypes } from "./types";

export const Operators = ({ data }: OperatorsTypes) => {
  return (
    <div>
      {/* Introduction */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Main Function */}
      <span>{data.main_function.title}</span>
      <p>{data.main_function.description}</p>
      {/* Importance */}
      <span>{data.importance.title}</span>
      <ul>
        {data.importance.items.map((item, index) => (
          <li key={index}>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      {/* Additional Concepts */}
      <span>{data.additional_concepts.title}</span>
      <ul>
        {data.additional_concepts.items.map((item, index) => (
          <li key={index}>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      {/* All Operator */}
      {data.operators.map((operator, index) => (
        <div key={index}>
          <span>{operator.title}</span>
          <p>{operator.description}</p>
          {/* Each Operator */}
          <ul>
            {operator.items?.map((item, index) => (
              <li key={index}>
                <p>
                  <strong>
                    {item.title} ({item.symbol}):
                  </strong>{" "}
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Conclusion */}
      <p>{data.conclusion}</p>
    </div>
  );
};
