"use client";

import React, { Fragment } from "react";

import { StylesModificationTypes } from "./types";
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

export const StylesModification = ({ data }: StylesModificationTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Each Style Modification */}
      <BasicBoxWrapper>
        {data.modifications.map((modification, idx) => (
          <Fragment key={idx}>
            <SecondaryTitle>{modification.title}</SecondaryTitle>
            <BasicDescription>{modification.description}</BasicDescription>
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
