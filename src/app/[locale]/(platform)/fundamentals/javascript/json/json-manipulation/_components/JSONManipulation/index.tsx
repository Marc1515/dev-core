"use client";

import React, { Fragment } from "react";

import { JSONManipulationTypes } from "./types";
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
  ItemListTitle,
  List,
} from "@/app/[locale]/(platform)/_components/Lists";
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const JSONManipulation = ({ data }: JSONManipulationTypes) => {
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>

      {data.items.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>

          <>
            <BasicDescription>{item.description}</BasicDescription>
            <ListWrapper>
              <List>
                {item.items?.map((item, idx) => (
                  <ItemList key={idx}>
                    <ItemListTitle>{item.title}</ItemListTitle>
                    <ItemListDescription>
                      {item.description}
                    </ItemListDescription>
                  </ItemList>
                ))}
              </List>
            </ListWrapper>
            {/* Code */}
            {item.title !== "Best Practices for JSON Manipulation" ? (
              <CodeComponent codeToCopy={codes} idx={idx} />
            ) : null}
          </>
        </BasicBoxWrapper>
      ))}
    </>
  );
};
