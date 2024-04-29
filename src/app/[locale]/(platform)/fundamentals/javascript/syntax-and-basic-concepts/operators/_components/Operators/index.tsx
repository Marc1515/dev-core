"use client";

import React, { Fragment } from "react";

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
import { DescriptionList } from "@/app/[locale]/(platform)/_components/ListWrapper/_components/DescriptionList";
import { Conclusion } from "@/app/[locale]/(platform)/_components/BasicBoxWrapper/_components/Conclusion";

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
            <Fragment key={index}>
              <ItemList>
                <TitleItemList>{item.title}</TitleItemList>
                <DescriptionItemList>{item.description}</DescriptionItemList>
              </ItemList>
            </Fragment>
          ))}
        </ContentList>
      </ListWrapper>
      {/* Additional Concepts */}
      <ListWrapper>
        <TitleList>{data.additional_concepts.title}</TitleList>
        <ContentList>
          {data.importance.items.map((item, index) => (
            <Fragment key={index}>
              <ItemList>
                <TitleItemList>{item.title}</TitleItemList>
                <DescriptionItemList>{item.description}</DescriptionItemList>
              </ItemList>
            </Fragment>
          ))}
        </ContentList>
      </ListWrapper>
      {/* All Operator */}
      <ListWrapper>
        {data.operators.map((operator, index) => (
          <Fragment key={index}>
            <TitleList>{operator.title}</TitleList>
            <DescriptionList>{operator.description}</DescriptionList>
            {/* Each Operator */}
            <ContentList>
              {operator.items?.map((item, index) => (
                <Fragment key={index}>
                  <ItemList>
                    <TitleItemList>
                      {item.title} ({item.symbol}):
                    </TitleItemList>
                    <DescriptionItemList>
                      {item.description}
                    </DescriptionItemList>
                  </ItemList>
                </Fragment>
              ))}
            </ContentList>
          </Fragment>
        ))}
      </ListWrapper>
      {/* Conclusion */}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </div>
  );
};
