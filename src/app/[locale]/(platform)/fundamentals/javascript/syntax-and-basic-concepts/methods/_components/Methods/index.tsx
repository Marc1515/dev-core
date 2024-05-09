"use client";

import React from "react";

import { MethodsTypes } from "./types";
import { methodCode } from "./codes";

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
/* Lists */
import {
  ItemList,
  ItemListDescription,
  ItemListTitle,
  List,
} from "@/app/[locale]/(platform)/_components/Lists";
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const Methods = ({ data }: MethodsTypes) => {
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Code */}
      <CodeComponent codeToCopy={methodCode} />
      {/* Key Differncies */}
      <>
        <SecondaryTitle>{data.key_differences.title}</SecondaryTitle>
        <List>
          {data.key_differences.items.map((item, idx) => (
            <ItemList key={idx}>
              <ItemListTitle>{item.title}</ItemListTitle>
              <ItemListDescription>{item.description}</ItemListDescription>
            </ItemList>
          ))}
        </List>
      </>
      {/* Conclusion */}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};
