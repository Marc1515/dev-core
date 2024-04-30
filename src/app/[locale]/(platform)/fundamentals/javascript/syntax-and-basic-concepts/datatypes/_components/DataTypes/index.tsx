"use client";

import React from "react";

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
  SubTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/app/[locale]/(platform)/_components/Paragraphs";
/* Lists */
import { List, ItemList } from "@/app/[locale]/(platform)/_components/Lists";

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
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <BasicDescription>{item.description}</BasicDescription>
          {/* Each Item */}
          <List>
            {item.items.map((item, idx) => (
              <div key={idx}>
                <ItemList>
                  <SubTitle>{item.title}: </SubTitle>
                  {item.description}
                </ItemList>
                {item.title !== "Symbol" && item.title !== "Function" && (
                  <Separator />
                )}
              </div>
            ))}
          </List>
        </ListWrapper>
      ))}
    </div>
  );
};
