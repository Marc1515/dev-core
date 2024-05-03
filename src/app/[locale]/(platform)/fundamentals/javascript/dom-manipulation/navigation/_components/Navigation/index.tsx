"use client";

import React, { Fragment } from "react";

import { NavigationTypes } from "./types";
import { codes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
/* Wrappers */
import {
  BasicBoxWrapper,
  CodeBox,
  CodeWrapper,
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  SecondaryTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/app/[locale]/(platform)/_components/Paragraphs";

export const Navigation = ({ data }: NavigationTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Each Type of Navigation */}
      <BasicBoxWrapper>
        {data.items.map((item, idx) => (
          <Fragment key={idx}>
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <BasicDescription>{item.description}</BasicDescription>
            {/* Code */}
            <CodeWrapper>
              <ClipboardButton textToCopy={codes[idx]} />
              <CodeBox>{codes[idx]}</CodeBox>
            </CodeWrapper>
          </Fragment>
        ))}
      </BasicBoxWrapper>
    </>
  );
};
