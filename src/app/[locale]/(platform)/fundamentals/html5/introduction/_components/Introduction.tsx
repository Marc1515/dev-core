"use client";

import React from "react";
import { Html5IntroductionTypes } from "./types";
/* Wrappers */
import {
  BasicBoxWrapper,
  ListWrapper,
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import { IntroTitle } from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import {
  BasicDescription,
  Conclusion,
} from "@/app/[locale]/(platform)/_components/Paragraphs";
/* Lists */
import {
  List,
  ItemList,
  ListTitle,
  ItemListTitle,
  ItemListDescription,
} from "@/app/[locale]/(platform)/_components/Lists";

export const Introduction = ({ data }: Html5IntroductionTypes) => {
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>

      {/* Intro List */}

      <ListWrapper>
        <List>
          {data.items.map((item, idx) => (
            <ItemList key={idx}>
              <ItemListTitle>{item.description}</ItemListTitle>
            </ItemList>
          ))}
        </List>
      </ListWrapper>

      {/* Basic Structure */}
      <BasicBoxWrapper>
        <ListTitle>{data.basic_structure.title}</ListTitle>
        <BasicDescription>{data.basic_structure.description}</BasicDescription>
        <ListWrapper>
          <List>
            {data.basic_structure.items.map((item, idx) => (
              <ItemList key={idx}>
                <ItemListTitle>{item.title}</ItemListTitle>
                <ItemListDescription>{item.description}</ItemListDescription>
              </ItemList>
            ))}
          </List>
        </ListWrapper>
      </BasicBoxWrapper>

      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};
