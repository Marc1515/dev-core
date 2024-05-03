"use client";

import React, { Fragment } from "react";

import { ArraysManipulationTypes } from "./types";
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
/* Lists */
import { ItemList, List } from "@/app/[locale]/(platform)/_components/Lists";

export const ArraysManipulation = ({ data }: ArraysManipulationTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Each Manipulation Type */}
      <BasicBoxWrapper>
        {data.manipulation.map((item, idx) => (
          <Fragment key={idx}>
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <List>
              {!item.description ? (
                item.items?.map((item, idx) => (
                  <ItemList key={idx}>
                    <BasicDescription>{item.description}</BasicDescription>
                  </ItemList>
                ))
              ) : (
                <BasicDescription>{item.description}</BasicDescription>
              )}
            </List>
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
