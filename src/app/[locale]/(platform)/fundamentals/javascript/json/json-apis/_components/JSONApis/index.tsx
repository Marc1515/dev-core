"use client";

import React, { Fragment } from "react";

import { JSONApisTypes } from "./types";
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
  SubTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/app/[locale]/(platform)/_components/Paragraphs";
/* Lists */
import { ItemList, List } from "@/app/[locale]/(platform)/_components/Lists";

export const JSONApis = ({ data }: JSONApisTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {data.items.map((item, idx) => (
        <Fragment key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          {item.description ? (
            <>
              <BasicDescription>{item.description}</BasicDescription>
              {/* Code */}
              <CodeWrapper>
                <CodeBox>{codes[idx]}</CodeBox>
                <ClipboardButton textToCopy={codes[idx]} />
              </CodeWrapper>
            </>
          ) : (
            <List>
              {item.items?.map((item, idx) => (
                <ItemList key={idx}>
                  <SubTitle>{item.title}</SubTitle>
                  <BasicDescription>{item.description}</BasicDescription>
                </ItemList>
              ))}
            </List>
          )}
        </Fragment>
      ))}
    </>
  );
};
