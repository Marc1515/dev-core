"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { controlStructuresNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const Loops = () => {
  const codeToCopy1 = `
  for (initialization; condition; increment) {
    // code block to execute
  }`;

  const codeToCopy2 = `
  while (condition) {
    // code block to execute
  }`;

  const codeToCopy3 = `
  do {
    // code block to execute
  } while (condition);`;

  const codeToCopy4 = `
  for (var key in object) {
    console.log(key + ": " + object[key]);
  }`;

  const codeToCopy5 = `
  for (var element of iterable) {
    console.log(element);
  }`;

  const translations = useTranslations(controlStructuresNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <p>
        <strong>for: </strong>
        {mainT("for_explanation")}
      </p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <p>
        <strong>while: </strong>
        {mainT("while_explanation")}
      </p>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
      <p>
        <strong>do-while: </strong>
        {mainT("do_while_explanation")}
      </p>
      <div>
        <pre>{codeToCopy3}</pre>
        <ClipboardButton textToCopy={codeToCopy3} />
      </div>
      <p>
        <strong>for-in: </strong>
        {mainT("for_in_explanation")}
      </p>
      <div>
        <pre>{codeToCopy4}</pre>
        <ClipboardButton textToCopy={codeToCopy4} />
      </div>
      <p>
        <strong>for-of: </strong>
        {mainT("for_of_explanation")}
      </p>
      <div>
        <pre>{codeToCopy4}</pre>
        <ClipboardButton textToCopy={codeToCopy4} />
      </div>
    </div>
  );
};
