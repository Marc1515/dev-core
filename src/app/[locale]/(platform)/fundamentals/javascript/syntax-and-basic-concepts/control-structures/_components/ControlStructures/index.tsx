"use client";

import React from "react";

import { ControlStructuresTypes } from "./types";
import { ConditionalCodes, RepetitionCodes } from "./codes";
/* Wrappers */
import {
  BasicBoxWrapper,
  FirstIdxBoxWrapper,
  ListWrapper,
  SecondIdxBoxWrapper,
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  LoopTitle,
  SecondaryTitle,
  SubTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import {
  BasicDescription,
  Conclusion,
} from "@/app/[locale]/(platform)/_components/Paragraphs";
/* List */
import {
  List,
  ItemList,
  ItemListDescription,
  ItemListTitle,
  ListTitle,
} from "@/app/[locale]/(platform)/_components/Lists";
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
        <ListWrapper>
          <List>
            {data.importance.items.map((item, idx) => (
              <ItemList key={idx}>
                <ItemListTitle>{item.title}</ItemListTitle>
                <ItemListDescription>{item.description}</ItemListDescription>
              </ItemList>
            ))}
          </List>
        </ListWrapper>
      </BasicBoxWrapper>
      {/* Structures */}
      <BasicBoxWrapper>
        <LoopTitle>{data.structures.title}</LoopTitle>
        {data.structures.items.map((item, idx) => (
          <FirstIdxBoxWrapper key={idx}>
            <SubTitle>{item.title}</SubTitle>
            <BasicDescription>{item.description}</BasicDescription>
            {item.id === 3
              ? item.items?.map((item, idx) => (
                  <SecondIdxBoxWrapper key={idx}>
                    <SubTitle>{item.title}</SubTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <CodeComponent codeToCopy={RepetitionCodes} idx={idx} />
                  </SecondIdxBoxWrapper>
                ))
              : item.items?.map((item, idx) => (
                  <SecondIdxBoxWrapper key={idx}>
                    <SubTitle>{item.title}</SubTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <CodeComponent codeToCopy={ConditionalCodes} idx={idx} />
                  </SecondIdxBoxWrapper>
                ))}
          </FirstIdxBoxWrapper>
        ))}
      </BasicBoxWrapper>
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};
