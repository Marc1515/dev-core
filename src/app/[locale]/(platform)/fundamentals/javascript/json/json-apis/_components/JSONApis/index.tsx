"use client";

import React from "react";

import { JSONApisTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const JSONApis = ({ data }: JSONApisTypes) => {
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
              <div>
                <pre>{codes[idx]}</pre>
                <ClipboardButton textToCopy={codes[idx]} />
              </div>
            </div>
          ) : (
            <ul>
              {item.items?.map((item, idx) => (
                <li key={idx}>
                  <span>{item.title}</span>
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
