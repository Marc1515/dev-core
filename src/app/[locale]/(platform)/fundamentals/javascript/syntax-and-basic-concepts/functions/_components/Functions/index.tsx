"use client";

import React, { Fragment } from "react";
import { FunctionsTypes } from "./types";
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
import {
  BasicDescription,
  Conclusion,
} from "@/app/[locale]/(platform)/_components/Paragraphs";

export const Functions = ({ data }: FunctionsTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Each Function */}
      <BasicBoxWrapper>
        {data.items.map((item, index) => (
          <Fragment key={index}>
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <BasicDescription>{item.description}</BasicDescription>
            <>
              <CodeWrapper>{codes[index]}</CodeWrapper>
              <ClipboardButton textToCopy={codes[index]} />
            </>
          </Fragment>
        ))}
      </BasicBoxWrapper>
      {/* Conclusion */}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};
