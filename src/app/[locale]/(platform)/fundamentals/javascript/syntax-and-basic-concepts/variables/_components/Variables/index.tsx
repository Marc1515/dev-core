"use client";

import React from "react";
import { VariablesTypes } from "./types";
import { IntroWrapper } from "@/app/[locale]/(platform)/_components/IntroWrapper";
import { IntroTitle } from "@/app/[locale]/(platform)/_components/IntroWrapper/_components/IntroTitle";
import { IntroDescription } from "@/app/[locale]/(platform)/_components/IntroWrapper/_components/IntroDescription";

export const Variables = ({ data }: VariablesTypes) => {
  return (
    <div>
      {/* Variables */}
      <IntroWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <IntroDescription>{data.description}</IntroDescription>
      </IntroWrapper>

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
