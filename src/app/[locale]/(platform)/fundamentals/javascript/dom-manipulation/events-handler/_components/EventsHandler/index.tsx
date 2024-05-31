"use client";

import React, { Fragment } from "react";

import { EventsHandlerTypes } from "./types";
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
import { CodeComponent } from "@/app/[locale]/(platform)/_components/CodeComponent";

export const EventsHandler = ({ data }: EventsHandlerTypes) => {
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Event Handler */}

      {data.events.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <BasicDescription>{item.description}</BasicDescription>
          {/* Code */}
          <CodeComponent codeToCopy={codes} idx={idx} />
        </BasicBoxWrapper>
      ))}
    </>
  );
};
