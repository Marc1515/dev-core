"use client";

import React, { Fragment } from "react";

import { ControlStructuresTypes } from "./types";
import { ConditionalCodes, RepetitionCodes } from "./codes";
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
/* List */
import { List, ItemList } from "@/app/[locale]/(platform)/_components/Lists";
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

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
                    <CodeComponent codeToCopy={RepetitionCodes} idx={idx} />
                  </Fragment>
                ))
              : structure.items?.map((item, idx) => (
                  <Fragment key={idx}>
                    <SubTitle>{item.title}</SubTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <CodeComponent codeToCopy={ConditionalCodes} idx={idx} />
                  </Fragment>
                ))}
          </Fragment>
        ))}
      </BasicBoxWrapper>
    </>
  );
};
