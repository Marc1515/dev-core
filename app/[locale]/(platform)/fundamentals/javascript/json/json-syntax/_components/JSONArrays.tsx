"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { jsonNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const JSONArrays = () => {
  const codeToCopy = `
    [
        "apple",
        "banana",
        "cherry"
    ]`;

  const translations = useTranslations(jsonNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  const pointOne = mainT("json_syntax.arrays.point_one");
  const pointTwo = mainT("json_syntax.arrays.point_two");

  return (
    <div>
      <span>Arrays</span>
      <ul>
        <li>
          <p>{pointOne}</p>
        </li>
        <li>
          <p>{pointTwo}</p>
        </li>
      </ul>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
