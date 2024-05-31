"use client";

import React, { Fragment } from "react";

import { DataTypesTypes } from "./types";
/* Wrappers */
import {
  BasicBoxWrapper,
  ListWrapper,
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  SecondaryTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/app/[locale]/(platform)/_components/Paragraphs";
/* Lists */
import {
  List,
  ItemList,
  ItemListTitle,
  ItemListDescription,
} from "@/app/[locale]/(platform)/_components/Lists";

export const DataTypes = ({ data }: DataTypesTypes) => {
  return (
    <div>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Data Type */}
      <>
        {data.types.map((item, idx) => (
          <BasicBoxWrapper key={idx}>
            {/* List Introduction */}
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <BasicDescription>{item.description}</BasicDescription>
            {/* Each Item */}
            <ListWrapper>
              <List>
                {item.items.map((item, idx) => (
                  <Fragment key={idx}>
                    <ItemList>
                      <ItemListTitle>{item.title}: </ItemListTitle>
                      <ItemListDescription>
                        {item.description}
                      </ItemListDescription>
                    </ItemList>
                  </Fragment>
                ))}
              </List>
            </ListWrapper>
          </BasicBoxWrapper>
        ))}
      </>
    </div>
  );
};
