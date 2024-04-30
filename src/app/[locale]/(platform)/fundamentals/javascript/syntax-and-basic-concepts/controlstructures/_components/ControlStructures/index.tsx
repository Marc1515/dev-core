"use client";

import React, { Fragment } from "react";
import { ControlStructuresTypes } from "./types";
import { ConditionalCodes, RepetitionCodes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
/* Wrappers */
import {
  BasicBoxWrapper,
  ListWrapper,
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
/* List */
import { List, ItemList } from "@/app/[locale]/(platform)/_components/Lists";

export const ControlStructures = ({ data }: ControlStructuresTypes) => {
  return (
    <>
      {/* Introduction */}
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
          {data.importance.items.map((item, index) => (
            <ItemList key={index}>
              <SubTitle>{item.title}</SubTitle>
              <BasicDescription>{item.description}</BasicDescription>
            </ItemList>
          ))}
        </List>
      </ListWrapper>
      {/* Structures */}
      <BasicBoxWrapper>
        {data.structures.map((structure, index) => (
          <Fragment key={index}>
            <SecondaryTitle>{structure.title}</SecondaryTitle>
            <BasicDescription>{structure.description}</BasicDescription>
            {structure.title === "Repetition Structures (Loops)"
              ? structure.items?.map((item, idx) => (
                  <Fragment key={idx}>
                    <SubTitle>{item.title}</SubTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <>
                      <CodeWrapper>{RepetitionCodes[idx]}</CodeWrapper>
                      <ClipboardButton textToCopy={RepetitionCodes[idx]} />
                    </>
                  </Fragment>
                ))
              : structure.items?.map((item, idx) => (
                  <Fragment key={idx}>
                    <SubTitle>{item.title}</SubTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <>
                      <CodeWrapper>{ConditionalCodes[idx]}</CodeWrapper>
                      <ClipboardButton textToCopy={ConditionalCodes[idx]} />
                    </>
                  </Fragment>
                ))}
          </Fragment>
        ))}
      </BasicBoxWrapper>
    </>
  );
};
