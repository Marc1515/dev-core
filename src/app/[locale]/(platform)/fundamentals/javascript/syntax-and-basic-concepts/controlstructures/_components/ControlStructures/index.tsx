"use client";

import React, { Fragment } from "react";
import { ControlStructuresTypes } from "./types";
import { ConditionalCodes, RepetitionCodes } from "./codes";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
import { BasicBoxWrapper } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper";
import { IntroTitle } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/IntroTitle";
import { BasicDescription } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/BasicDescription";
import { SecondaryTitle } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/SecondaryTitle";
import { ListWrapper } from "@/app/[locale]/(platform)/_components/ListWrapper";
import { ContentList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList";
import { ItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList";
import { DescriptionItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList/_components/DescriptionItemList";
import { CodeBox } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/CodeBox";

export const ControlStructures = ({ data }: ControlStructuresTypes) => {
  return (
    <div>
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
        <ContentList>
          {data.importance.items.map((item, index) => (
            <ItemList key={index}>
              <DescriptionItemList>{item.description}</DescriptionItemList>
            </ItemList>
          ))}
        </ContentList>
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
                    <SecondaryTitle>{item.title}</SecondaryTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <>
                      <CodeBox>{RepetitionCodes[idx]}</CodeBox>
                      <ClipboardButton textToCopy={RepetitionCodes[idx]} />
                    </>
                  </Fragment>
                ))
              : structure.items?.map((item, idx) => (
                  <Fragment key={idx}>
                    <SecondaryTitle>{item.title}</SecondaryTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                    <>
                      <CodeBox>{ConditionalCodes[idx]}</CodeBox>
                      <ClipboardButton textToCopy={ConditionalCodes[idx]} />
                    </>
                  </Fragment>
                ))}
          </Fragment>
        ))}
      </BasicBoxWrapper>
    </div>
  );
};
