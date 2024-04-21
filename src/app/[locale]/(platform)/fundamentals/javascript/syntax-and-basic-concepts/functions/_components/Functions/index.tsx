"use client";

import React from "react";
import { FunctionsTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const Functions = ({ data }: FunctionsTypes) => {
  return (
    <div>
      {/* Introduction */}
      <span>{data.title}</span>
      <p>{data.description}</p>
      {/* Each Function */}
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
      {/* Conclusion */}
      <p>{data.conclusion}</p>
    </div>
  );
};
