"use client";

import React from "react";

import { OperatorsTypes } from "./types";
import { BasicBoxWrapper } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper";
import { BasicDescription } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/BasicDescription";
import { IntroTitle } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/IntroTitle";
import { ListWrapper } from "@/app/[locale]/(platform)/_components/ListWrapper";
import { TitleList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/TitleList";
import { ContentList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList";
import { ItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList";
import { DescriptionItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList/_components/DescriptionItemList";
import { TitleItemList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/ContentList/_components/ItemsList/_components/TitleItemList";
import { SecondaryTitle } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/SecondaryTitle";

export const Operators = ({ data }: OperatorsTypes) => {
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
        <TitleList>{data.importance.title}</TitleList>
        <ContentList>
          {data.importance.items.map((item, index) => (
            <div key={index}>
              <ItemList>
                <TitleItemList>{item.title}</TitleItemList>
                <DescriptionItemList>{item.description}</DescriptionItemList>
              </ItemList>
            </div>
          ))}
        </ContentList>
      </ListWrapper>
      {/* Additional Concepts */}
      <ListWrapper>
        <TitleList>{data.additional_concepts.title}</TitleList>
        <ContentList>
          {data.importance.items.map((item, index) => (
            <div key={index}>
              <ItemList>
                <TitleItemList>{item.title}</TitleItemList>
                <DescriptionItemList>{item.description}</DescriptionItemList>
              </ItemList>
            </div>
          ))}
        </ContentList>
      </ListWrapper>
      {/* All Operator */}
      {data.operators.map((operator, index) => (
        <div key={index}>
          <span>{operator.title}</span>
          <p>{operator.description}</p>
          {/* Each Operator */}
          <ul>
            {operator.items?.map((item, index) => (
              <li key={index}>
                <p>
                  <strong>
                    {item.title} ({item.symbol}):
                  </strong>{" "}
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Conclusion */}
      <p>{data.conclusion}</p>
    </div>
  );
};
