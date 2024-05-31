"use client";

import React, { Fragment } from "react";

import { StringsManipulationTypes } from "./types";
import { codes } from "./codes";
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
  ItemList,
  ItemListDescription,
  List,
} from "@/app/[locale]/(platform)/_components/Lists";
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const StringsManipulation = ({ data }: StringsManipulationTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>
      {/* Each Manipulation Type */}

      {data.manipulation.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <ListWrapper>
            <List>
              {!item.description ? (
                item.items?.map((item, idx) => (
                  <ItemList key={idx}>
                    <ItemListDescription>
                      {item.description}
                    </ItemListDescription>
                  </ItemList>
                ))
              ) : (
                <BasicDescription>{item.description}</BasicDescription>
              )}
            </List>
          </ListWrapper>
          {/* Code */}
          <CodeComponent codeToCopy={codes} idx={idx} />
        </BasicBoxWrapper>
      ))}
    </>
  );
};
