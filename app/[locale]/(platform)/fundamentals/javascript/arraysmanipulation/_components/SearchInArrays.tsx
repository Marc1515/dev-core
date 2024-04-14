"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { arraysManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const SearchInArrays = () => {
  const codeToCopy = `
    let people = [{name: "John", age: 28}, {name: "Anna", age: 22}];
    let anna = people.find(person => person.name === "Anna");
    console.log(anna); // {name: "Anna", age: 22}`;

  const translations = useTranslations(arraysManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("search_in_arrays_title")}</span>
      <p>{mainT("search_in_arrays_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
