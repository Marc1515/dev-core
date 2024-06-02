"use client";

import React from "react";

import { JSONSyntaxPageTypes } from "./types";
import { codes } from "./codes";
/* Wrappers */
import {
  BasicBoxWrapper,
  ListWrapper,
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
import {
  ItemList,
  ItemListDescription,
  ItemListTitle,
  List,
} from "@/app/[locale]/(platform)/_components/Lists";
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const JSONSyntax = ({ data }: JSONSyntaxPageTypes) => {
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>

      {/* Each Explanation */}

      {data.items.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <BasicDescription>{item.description}</BasicDescription>
          <ListWrapper>
            <List>
              {item.items?.map((item, idx) => (
                <ItemList key={idx}>
                  <ItemListTitle>{item.title}</ItemListTitle>
                  <ItemListDescription>{item.description}</ItemListDescription>
                </ItemList>
              ))}
            </List>
          </ListWrapper>
          {codes[idx] === "" ? null : (
            /* Code */
            <CodeComponent codeToCopy={codes} idx={idx} />
          )}
        </BasicBoxWrapper>
      ))}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};
