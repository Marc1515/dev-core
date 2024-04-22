"use client";

import React from "react";

import { StylesModificationTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const StylesModification = ({ data }: StylesModificationTypes) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <span>{data.description}</span>
      {data.modifications.map((modification, idx) => (
        <div key={idx}>
          <span>{modification.title}</span>
          <p>{modification.description}</p>
          <div>
            <pre>{codes[idx]}</pre>
            <ClipboardButton textToCopy={codes[idx]} />
          </div>
        </div>
      ))}
    </div>
  );
};
