"use client";

import React from "react";
import { VariablesTypes } from "./types";
import { BasicBoxWrapper } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper";
import { IntroTitle } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/IntroTitle";
import { BasicDescription } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/BasicDescription";
import { SecondaryTitle } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/SecondaryTitle";
import { ListWrapper } from "@/app/[locale]/(platform)/_components/ListWrapper";
import { TitleList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/TitleList";
import { ContentList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList";
import { DescriptionList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/DescriptionList";
import { ItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList";
import { TitleItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList/_components/TitleItemList";

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
        <TitleList>{data.importance.title}</TitleList>
        <ContentList>
          {data.importance.items.map((item, idx) => (
            <ItemList key={idx}>
              <TitleItemList>{item.title}</TitleItemList>
              <DescriptionList>{item.description}</DescriptionList>
            </ItemList>
          ))}
        </ContentList>
      </ListWrapper>
    </>
  );
};
