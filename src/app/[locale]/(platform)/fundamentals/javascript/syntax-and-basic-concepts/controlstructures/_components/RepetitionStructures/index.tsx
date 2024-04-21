"use client";

import React from "react";

import { RepetitionStructuresTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const RepetitionStructures = ({ data }: RepetitionStructuresTypes) => {
  return (
    <div>
      <span>{data.title}</span>
      <p>{data.description}</p>
      {data.items.map((item, index) => (
        <div key={index}>
          <p>
            <strong>{item.title}: </strong>
            {item.description}
          </p>
          <div>
            <pre>{codes[index]}</pre>
            <ClipboardButton textToCopy={codes[index]} />
          </div>
        </div>
      ))}
    </div>
  );
};
