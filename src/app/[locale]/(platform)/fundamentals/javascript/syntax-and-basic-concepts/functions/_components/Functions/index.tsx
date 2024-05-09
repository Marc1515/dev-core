"use client";

import React, { Fragment } from "react";

import { FunctionsTypes } from "./types";
import { codes } from "./codes";
/* Wrappers */
import { BasicBoxWrapper } from "@/app/[locale]/(platform)/_components/Wrappers";
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
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const Functions = ({ data }: FunctionsTypes) => {
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Function */}
      <BasicBoxWrapper>
        {data.items.map((item, idx) => (
          <Fragment key={idx}>
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <BasicDescription>{item.description}</BasicDescription>
            <CodeComponent codeToCopy={codes} idx={idx} />
          </Fragment>
        ))}
      </BasicBoxWrapper>
      {/* Conclusion */}
      <>
        <Conclusion>{data.conclusion}</Conclusion>
      </>
    </>
  );
};
