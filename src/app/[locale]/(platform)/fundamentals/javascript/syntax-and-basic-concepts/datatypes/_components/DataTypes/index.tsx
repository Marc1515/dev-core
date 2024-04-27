"use client";

import React from "react";

import { DataTypesTypes } from "./types";
import { IntroWrapper } from "@/app/[locale]/(platform)/_components/IntroWrapper";
import { IntroTitle } from "@/app/[locale]/(platform)/_components/IntroWrapper/_components/IntroTitle";
import { IntroDescription } from "@/app/[locale]/(platform)/_components/IntroWrapper/_components/IntroDescription";
import { ListWrapper } from "@/app/[locale]/(platform)/_components/ListWrapper";
import { TitleList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/TitleList";
import { DescriptionList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/DescriptionList";
import { ContentList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList";
import { ItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList";

export const DataTypes = ({ data }: DataTypesTypes) => {
  return (
    <div>
      {/* Introduction */}
      <IntroWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <IntroDescription>{data.description}</IntroDescription>
      </IntroWrapper>
      {/* Each Data Type */}
      {data.types.map((item, idx) => (
        <ListWrapper key={idx}>
          {/* Introduction */}
          <TitleList>{item.title}</TitleList>
          <DescriptionList>{item.description}</DescriptionList>
          {/* Each Type */}
          <ContentList>
            {item.items.map((item, idx) => (
              <ItemList key={idx}>
                <strong>{item.title}: </strong>
                {item.description}
              </ItemList>
            ))}
          </ContentList>
        </ListWrapper>
      ))}
    </div>
  );
};
