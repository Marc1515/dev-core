"use client";

import React from "react";
import { VariablesTypes } from "./types";
/* Wrappers */
import {
  BasicBoxWrapper,
  ListWrapper,
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
import { List, ItemList } from "@/app/[locale]/(platform)/_components/Lists";

export const Variables = ({ data }: VariablesTypes) => {
  return (
    <>
      {/* Variables */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>

      {/* Main Function */}
      <BasicBoxWrapper>
        <SecondaryTitle>{data.main_function.title}</SecondaryTitle>
        <BasicDescription>{data.main_function.description}</BasicDescription>
      </BasicBoxWrapper>

      {/* Importance */}
      <ListWrapper>
        <SecondaryTitle>{data.importance.title}</SecondaryTitle>
        <List>
          {data.importance.items.map((item, idx) => (
            <ItemList key={idx}>
              <SubTitle>{item.title}</SubTitle>
              <BasicDescription>{item.description}</BasicDescription>
            </ItemList>
          ))}
        </List>
      </ListWrapper>
    </>
  );
};
