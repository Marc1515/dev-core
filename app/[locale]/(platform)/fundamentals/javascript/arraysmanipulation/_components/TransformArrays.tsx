"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { arraysManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const TransformArrays = () => {
  const codeToCopy = `
    let squares = numbers.map(num => num * num);
    console.log(squares); // [1, 4, 9]`;

  const translations = useTranslations(arraysManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("transform_arrays_title")}</span>
      <p>{mainT("transform_arrays_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
