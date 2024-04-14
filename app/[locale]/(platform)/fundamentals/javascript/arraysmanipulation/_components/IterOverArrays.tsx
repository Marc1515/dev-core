"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { arraysManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const IterOverArrays = () => {
  const codeToCopy = `
    let numbers = [1, 2, 3];
    numbers.forEach(num => {
        console.log(num);
    });`;

  const translations = useTranslations(arraysManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("iter_over_arrays_title")}</span>
      <p>{mainT("iter_over_arrays_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
