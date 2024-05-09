"use client";

import React from "react";

import { OperatorsTypes } from "./types";
/* Wrappers */
import {
  BasicBoxWrapper,
  FirstIdxBoxWrapper,
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  SecondaryTitle,
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
  ItemListTitle,
  ItemListDescription,
} from "@/app/[locale]/(platform)/_components/Lists";

export const Operators = ({ data }: OperatorsTypes) => {
  return (
    <div>
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
        <SecondaryTitle>{data.importance.title}</SecondaryTitle>
        <List>
          {data.importance.items.map((item, index) => (
            <ItemList key={index}>
              <ItemListTitle>{item.title}</ItemListTitle>
              <ItemListDescription>{item.description}</ItemListDescription>
            </ItemList>
          ))}
        </List>
      </BasicBoxWrapper>
      {/* Additional Concepts */}
      <BasicBoxWrapper>
        <SecondaryTitle>{data.additional_concepts.title}</SecondaryTitle>
        <List>
          {data.importance.items.map((item, index) => (
            <ItemList key={index}>
              <ItemListTitle>{item.title}</ItemListTitle>
              <ItemListDescription>{item.description}</ItemListDescription>
            </ItemList>
          ))}
        </List>
      </BasicBoxWrapper>
      {/* All Operators */}
      <>
        {data.operators.map((operator, index) => (
          <BasicBoxWrapper key={index}>
            <SecondaryTitle>{operator.title}</SecondaryTitle>
            <BasicDescription>{operator.description}</BasicDescription>
            {/* Each Operator */}
            <List>
              {operator.items?.map((item, index) => (
                <ItemList key={index}>
                  <ItemListTitle>
                    {item.title} ({item.symbol}):
                  </ItemListTitle>
                  <ItemListDescription>{item.description}</ItemListDescription>
                </ItemList>
              ))}
            </List>
          </BasicBoxWrapper>
        ))}
      </>
      {/* Conclusion */}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </div>
  );
};
