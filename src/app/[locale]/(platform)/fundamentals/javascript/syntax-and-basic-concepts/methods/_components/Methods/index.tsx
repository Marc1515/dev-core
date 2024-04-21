"use client";

import React from "react";

import { MethodsTypes } from "./types";
import { methodCode } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const Methods = ({ data }: MethodsTypes) => {
  return (
    <div>
      {/* Introduction */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div>
        <pre>{methodCode}</pre>
        <ClipboardButton textToCopy={methodCode} />
      </div>
      {/* Key Differncies */}
      <span>{data.key_differences.title}</span>
      <ul>
        {data.key_differences.items.map((item, idx) => (
          <li key={idx}>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      {/* Conclusion */}
      <p>{data.conclusion}</p>
    </div>
  );
};
