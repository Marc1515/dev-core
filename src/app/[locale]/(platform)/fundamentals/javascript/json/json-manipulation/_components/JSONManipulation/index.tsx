"use client";

import React from "react";

import { JSONManipulationTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const JSONManipulation = ({ data }: JSONManipulationTypes) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {data.items.map((item, idx) => (
        <div key={idx}>
          <span>
            <strong>{item.title}</strong>
          </span>
          {item.description ? (
            <div>
              <p>{item.description}</p>
              <pre>{codes[idx]}</pre>
              <ClipboardButton textToCopy={codes[idx]} />
            </div>
          ) : (
            <ul>
              {item.items?.map((item, idx) => (
                <li key={idx}>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
