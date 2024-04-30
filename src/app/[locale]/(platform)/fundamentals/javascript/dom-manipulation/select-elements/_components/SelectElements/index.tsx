"use client";

import React, { Fragment } from "react";
import { SelectElementsTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
/* Wrappers */
import {
  BasicBoxWrapper,
  CodeWrapper,
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  SecondaryTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/app/[locale]/(platform)/_components/Paragraphs";

export const SelectElements = ({ data }: SelectElementsTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Each Selector */}
      <BasicBoxWrapper>
        {data.items?.map((item, idx) => (
          <Fragment key={idx}>
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <BasicDescription>{item.description}</BasicDescription>
            {/* Code */}
            <>
              <CodeWrapper>{codes[idx]}</CodeWrapper>
              <ClipboardButton textToCopy={codes[idx]} />
            </>
          </Fragment>
        ))}
      </BasicBoxWrapper>
    </>
  );
};
