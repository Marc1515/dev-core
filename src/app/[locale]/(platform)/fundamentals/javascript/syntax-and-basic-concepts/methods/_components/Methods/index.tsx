"use client";

import React from "react";

import { MethodsTypes } from "./types";
import { methodCode } from "./codes";
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
import {
  BasicDescription,
  Conclusion,
} from "@/app/[locale]/(platform)/_components/Paragraphs";
/* Lists */
import { ItemList, List } from "@/app/[locale]/(platform)/_components/Lists";

export const Methods = ({ data }: MethodsTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Code */}
      <CodeWrapper>
        <ClipboardButton textToCopy={methodCode} />
        <CodeBox>{methodCode}</CodeBox>
      </CodeWrapper>
      {/* Key Differncies */}
      <BasicBoxWrapper>
        <SecondaryTitle>{data.key_differences.title}</SecondaryTitle>
        <List>
          {data.key_differences.items.map((item, idx) => (
            <ItemList key={idx}>
              <BasicDescription>{item.description}</BasicDescription>
            </ItemList>
          ))}
        </List>
      </BasicBoxWrapper>
      {/* Conclusion */}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};
