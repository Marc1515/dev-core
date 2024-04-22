"use client";

import React from "react";
import { ElementContentModificationTypes } from "./types";
import { codes } from "./code";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const ElementContentModification = ({
  data,
}: ElementContentModificationTypes) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
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
