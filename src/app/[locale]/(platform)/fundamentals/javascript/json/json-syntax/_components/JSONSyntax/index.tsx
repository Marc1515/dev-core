"use client";

import React, { Fragment } from "react";

import { JSONSyntaxTypes } from "./types";
import { codes } from "./codes";
/* Wrappers */
import { BasicBoxWrapper } from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  SecondaryTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/app/[locale]/(platform)/_components/Paragraphs";
/* Lists */
import { ItemList, List } from "@/app/[locale]/(platform)/_components/Lists";
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const JSONSyntax = ({ data }: JSONSyntaxTypes) => {
  return (
    <>
      {/* Introduction */}
      <BasicBoxWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </BasicBoxWrapper>

      {/* Each Explanation */}
      <BasicBoxWrapper>
        {data.items.map((item, idx) => (
          <Fragment key={idx}>
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <BasicDescription>{item.description}</BasicDescription>
            <List>
              {item.items?.map((item, idx) => (
                <ItemList key={idx}>
                  <BasicDescription>{item.description}</BasicDescription>
                </ItemList>
              ))}
            </List>
            {codes[idx] === "" ? null : (
              /* Code */
              <CodeComponent codeToCopy={codes} idx={idx} />
            )}
          </Fragment>
        ))}
      </BasicBoxWrapper>
    </>
  );
};
