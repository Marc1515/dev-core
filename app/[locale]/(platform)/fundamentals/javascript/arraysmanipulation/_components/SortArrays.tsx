"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { arraysManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const SortArrays = () => {
  const codeToCopy = `
    let numbers = [3, 1, 4, 1, 5, 9];
    numbers.sort((a, b) => a - b);
    console.log(numbers); // [1, 1, 3, 4, 5, 9]`;

  const translations = useTranslations(arraysManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("sort_arrays_title")}</span>
      <p>{mainT("sort_arrays_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
