"use client";

import React from "react";
import { FormsTypes } from "./types";
/* Wrappers */
import {
  BasicBoxWrapper,
  ListWrapper,
  SecondIdxBoxWrapper,
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import { IntroTitle } from "@/app/[locale]/(platform)/_components/Titles";
import { SecondaryTitle } from "../../../../../_components/Titles/index";
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

export const Forms = ({ data }: FormsTypes) => {
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
              <ItemListTitle>{item.title}</ItemListTitle>
              <ItemListDescription>{item.description}</ItemListDescription>
            </ItemList>
          ))}
        </List>
      </ListWrapper>

      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};
