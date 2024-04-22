"use client";

import React from "react";
import { AddRemoveElementsTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const AddRemoveElements = ({ data }: AddRemoveElementsTypes) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {data.items.map((item, idx) => (
        <div key={idx}>
          <span>{item.title}</span>
          <p>{item.description}</p>
          <div>
            <pre>{codes[idx]}</pre>
            <ClipboardButton textToCopy={codes[idx]} />
          </div>
        </div>
      ))}
    </div>
  );
};
