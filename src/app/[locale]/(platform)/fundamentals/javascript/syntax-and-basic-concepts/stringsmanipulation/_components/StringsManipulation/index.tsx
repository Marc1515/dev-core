"use client";

import React from "react";

import { StringsManipulationTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const StringsManipulation = ({ data }: StringsManipulationTypes) => {
  return (
    <div>
      {/* Introduction */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Each Manipulation Type */}
      {data.manipulation.map((item, idx) => (
        <div key={idx}>
          <span>{item.title}</span>
          <ul>
            {!item.description ? (
              item.items?.map((item, idx) => (
                <li key={idx}>
                  <p>{item.description}</p>
                </li>
              ))
            ) : (
              <p>{item.description}</p>
            )}
          </ul>
          <div>
            <pre>{codes[idx]}</pre>
            <ClipboardButton textToCopy={codes[idx]} />
          </div>
        </div>
      ))}
    </div>
  );
};
