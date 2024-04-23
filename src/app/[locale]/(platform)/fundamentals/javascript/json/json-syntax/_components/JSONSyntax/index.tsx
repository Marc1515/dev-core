"use client";

import React from "react";

import { JSONSyntaxTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const JSONSyntax = ({ data }: JSONSyntaxTypes) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      {data.items.map((item, idx) => (
        <div key={idx}>
          <span>
            <strong>{item.title}</strong>
          </span>
          <p>{item.description}</p>
          <ul>
            {item.items?.map((item, idx) => (
              <li key={idx}>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
          {codes[idx] === "" ? null : (
            <div>
              <pre>{codes[idx]}</pre>
              <ClipboardButton textToCopy={codes[idx]} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
