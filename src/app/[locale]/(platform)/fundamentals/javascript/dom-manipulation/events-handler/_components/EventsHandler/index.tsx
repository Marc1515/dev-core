"use client";

import React from "react";
import { EventsHandlerTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const EventsHandler = ({ data }: EventsHandlerTypes) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <span>{data.description}</span>
      {data.events.map((item, idx) => (
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
