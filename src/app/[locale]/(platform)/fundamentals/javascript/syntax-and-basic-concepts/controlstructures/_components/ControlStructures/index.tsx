"use client";

import React from "react";

import { ControlStructuresTypes } from "./types";
import { ConditionalCodes, RepetitionCodes } from "./codes";
/* Wrappers */
import {
  BasicBoxWrapper,
  FirstIdxBoxWrapper,
  IdxBoxWrapper
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  LoopTitle,
  SecondaryTitle,
  SubTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/app/[locale]/(platform)/_components/Paragraphs";
/* List */
import { List, ItemList, ItemListDescription, ItemListTitle, ListTitle } from "@/app/[locale]/(platform)/_components/Lists";
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const ControlStructures = ({ data }: ControlStructuresTypes) => {
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Main Function */}
      <BasicBoxWrapper>
        <SecondaryTitle>{data.main_function.title}</SecondaryTitle>
        <BasicDescription>{data.main_function.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Importance */}
      <BasicBoxWrapper>
        <ListTitle>{data.importance.title}</ListTitle>
        <List>
          {data.importance.items.map((item, idx) => (
            <ItemList key={idx}>
              <ItemListTitle>{item.title}</ItemListTitle>
              <ItemListDescription>{item.description}</ItemListDescription>
            </ItemList>
          ))}
        </List>
      </BasicBoxWrapper>
      {/* Structures */}
      <BasicBoxWrapper>
        <LoopTitle>{data.structures.title}</LoopTitle>
        {data.structures.items.map((item, idx) => (
          <FirstIdxBoxWrapper key={idx}>
            <SubTitle>{item.title}</SubTitle>
            <BasicDescription>{item.description}</BasicDescription>
            {item.title === "Repetition Structures (Loops)"
              ? item.items?.map((item, idx) => (
                  <IdxBoxWrapper key={idx}>
                    <SubTitle>{item.title}</SubTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <CodeComponent codeToCopy={RepetitionCodes} idx={idx} />
                  </IdxBoxWrapper>
                ))
              : item.items?.map((item, idx) => (
                  <IdxBoxWrapper key={idx}>
                    <SubTitle>{item.title}</SubTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <CodeComponent codeToCopy={ConditionalCodes} idx={idx} />
                  </IdxBoxWrapper>
                ))}
          </FirstIdxBoxWrapper>
        ))}
      </BasicBoxWrapper>
    </>
  );
};
