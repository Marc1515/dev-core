"use client";

import React from "react";
import { VariablesTypes } from "./types";
import { BasicBoxWrapper } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper";
import { IntroTitle } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/IntroTitle";
import { BasicDescription } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/BasicDescription";

export const Variables = ({ data }: VariablesTypes) => {
  return (
    <div>
      {/* Variables */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>

      <span>{data.main_function.title}</span>
      <p>{data.main_function.description}</p>

      <span>{data.importance.title}</span>
      <ul>
        {data.importance.items.map((item, idx) => (
          <li key={idx}>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
