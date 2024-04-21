"use client";

import React from "react";
import { FunctionsTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const Functions = ({ data }: FunctionsTypes) => {
  return (
    <div>
      <span>{data.title}</span>
      <p>{data.description}</p>
      {data.items.map((item, index) => (
        <div key={index}>
          <span>{item.title}</span>
          <p>{item.description}</p>
          <div>
            <pre>{codes[index]}</pre>
            <ClipboardButton textToCopy={codes[index]} />
          </div>
        </div>
      ))}
    </div>
  );
};
