"use client";

import React, { Fragment } from "react";

import { AddRemoveElementsTypes } from "./types";
import { codes } from "./codes";
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

export const AddRemoveElements = ({ data }: AddRemoveElementsTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Each Modification */}
      <BasicBoxWrapper>
        {data.items.map((item, idx) => (
          <Fragment key={idx}>
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <BasicDescription>{item.description}</BasicDescription>
            {/* Code */}
            <CodeComponent codeToCopy={codes} idx={idx} />
          </Fragment>
        ))}
      </BasicBoxWrapper>
    </>
  );
};
