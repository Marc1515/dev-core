"use client";

import React, { Fragment } from "react";

import { ElementContentModificationTypes } from "./types";
import { codes } from "./code";
/* Wrappers */
import { BasicBoxWrapper } from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  SecondaryTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/app/[locale]/(platform)/_components/Paragraphs";
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const ElementContentModification = ({
  data,
}: ElementContentModificationTypes) => {
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Content Modification */}
      <BasicBoxWrapper>
        {data.modifications.map((modification, idx) => (
          <Fragment key={idx}>
            <SecondaryTitle>{modification.title}</SecondaryTitle>
            <BasicDescription>{modification.description}</BasicDescription>
            {/* Code */}
            <CodeComponent codeToCopy={codes} idx={idx} />
          </Fragment>
        ))}
      </BasicBoxWrapper>
    </>
  );
};
