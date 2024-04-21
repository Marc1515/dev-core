"use client";

import React from "react";
import { ControlStructuresTypes } from "./types";
import { ConditionalCodes, RepetitionCodes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const ControlStructures = ({ data }: ControlStructuresTypes) => {
  return (
    <div>
      {/* Introduction */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Main Function */}
      <span>{data.main_function.title}</span>
      <p>{data.main_function.description}</p>
      {/* Importance */}
      <span>{data.importance.title}</span>
      <ul>
        {data.importance.items.map((item, index) => (
          <li key={index}>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      {/* Structures */}
      {data.structures.map((structure, index) => (
        <div key={index}>
          <span>{structure.title}</span>
          <p>{structure.description}</p>
          {structure.title === "Repetition Structures (Loops)"
            ? structure.items?.map((item, idx) => (
                <div key={idx}>
                  <p>
                    <strong>{item.title}: </strong>
                    {item.description}
                  </p>
                  <div>
                    <pre>{RepetitionCodes[idx]}</pre>
                    <ClipboardButton textToCopy={RepetitionCodes[idx]} />
                  </div>
                </div>
              ))
            : structure.items?.map((item, idx) => (
                <div key={idx}>
                  <p>
                    <strong>{item.title}: </strong>
                    {item.description}
                  </p>
                  <div>
                    <pre>{ConditionalCodes[idx]}</pre>
                    <ClipboardButton textToCopy={ConditionalCodes[idx]} />
                  </div>
                </div>
              ))}
        </div>
      ))}
    </div>
  );
};
