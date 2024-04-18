"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { controlStructuresNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const Conditional = () => {
  const codeToCopy1 = `
  if (condition) {
    // code block executed if the condition is true
  }`;

  const codeToCopy2 = `
  if (condition) {
    // code block executed if the condition is true
  } else {
    // code block executed if the condition is false
  }`;

  const codeToCopy3 = `
  if (condition1) {
    // block executed if condition1 is true
  } else if (condition2) {
    // block executed if condition2 is true
  } else {
    // block executed if none of the above conditions are true
  }`;

  const codeToCopy4 = `
  switch (expression) {
    case value1:
      // code block
      break;
    case value2:
      // code block
      break;
    default:
      // code block if none of the above
  }`;

  const translations = useTranslations(controlStructuresNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <p>
        <strong>If: </strong>
        {mainT("if_explanation")}
      </p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <p>
        <strong>If-else: </strong>
        {mainT("if_else_explanation")}
      </p>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
      <p>
        <strong>If-else-if-else: </strong>
        {mainT("if_else_if_else_explanation")}
      </p>
      <div>
        <pre>{codeToCopy3}</pre>
        <ClipboardButton textToCopy={codeToCopy3} />
      </div>
      <p>
        <strong>Switch: </strong>
        {mainT("switch_explanation")}
      </p>
      <div>
        <pre>{codeToCopy4}</pre>
        <ClipboardButton textToCopy={codeToCopy4} />
      </div>
    </div>
  );
};
