"use client";

import React from "react";

import { DataTypesTypes } from "./types";
import { BasicBoxWrapper } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper";
import { IntroTitle } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/IntroTitle";
import { BasicDescription } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/BasicDescription";
import { ListWrapper } from "@/app/[locale]/(platform)/_components/ListWrapper";
import { TitleList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/TitleList";
import { DescriptionList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/DescriptionList";
import { ContentList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList";
import { ItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList";
import { TitleItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList/_components/TitleItemList";
import { Separator } from "@/components/ui/separator";

export const DataTypes = ({ data }: DataTypesTypes) => {
  return (
    <div>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Each Data Type */}
      {data.types.map((item, idx) => (
        <ListWrapper key={idx}>
          {/* List Introduction */}
          <TitleList>{item.title}</TitleList>
          <DescriptionList>{item.description}</DescriptionList>
          {/* Each Item */}
          <ContentList>
            {item.items.map((item, idx) => (
              <div key={idx}>
                <ItemList>
                  <TitleItemList>{item.title}: </TitleItemList>
                  {item.description}
                </ItemList>
                {item.title !== "Symbol" && item.title !== "Function" && (
                  <Separator />
                )}
              </div>
            ))}
          </ContentList>
        </ListWrapper>
      ))}
    </div>
  );
};
