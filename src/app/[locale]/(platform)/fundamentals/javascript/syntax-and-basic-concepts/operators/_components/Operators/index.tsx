"use client";

import React, { Fragment } from "react";

import { OperatorsTypes } from "./types";
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
import {
  BasicDescription,
  Conclusion,
} from "@/app/[locale]/(platform)/_components/Paragraphs";
/* List */
import { List, ItemList } from "@/app/[locale]/(platform)/_components/Lists";

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
        <SecondaryTitle>{data.importance.title}</SecondaryTitle>
        <List>
          {data.importance.items.map((item, index) => (
            <Fragment key={index}>
              <ItemList>
                <SubTitle>{item.title}</SubTitle>
                <BasicDescription>{item.description}</BasicDescription>
              </ItemList>
            </Fragment>
          ))}
        </List>
      </ListWrapper>
      {/* Additional Concepts */}
      <ListWrapper>
        <SecondaryTitle>{data.additional_concepts.title}</SecondaryTitle>
        <List>
          {data.importance.items.map((item, index) => (
            <Fragment key={index}>
              <ItemList>
                <SubTitle>{item.title}</SubTitle>
                <BasicDescription>{item.description}</BasicDescription>
              </ItemList>
            </Fragment>
          ))}
        </List>
      </ListWrapper>
      {/* All Operators */}
      <ListWrapper>
        {data.operators.map((operator, index) => (
          <Fragment key={index}>
            <SecondaryTitle>{operator.title}</SecondaryTitle>
            <BasicDescription>{operator.description}</BasicDescription>
            {/* Each Operator */}
            <List>
              {operator.items?.map((item, index) => (
                <Fragment key={index}>
                  <ItemList>
                    <SubTitle>
                      {item.title} ({item.symbol}):
                    </SubTitle>
                    <BasicDescription>{item.description}</BasicDescription>
                  </ItemList>
                </Fragment>
              ))}
            </List>
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
