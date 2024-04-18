"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { arraysManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const AddAndRemove = () => {
  const codeToCopy = `
    let fruits = ["Apple", "Banana"];
    fruits.push("Orange"); // ["Apple", "Banana", "Orange"]
    fruits.pop(); // ["Apple", "Banana"]
    fruits.shift(); // ["Banana"]
    fruits.unshift("Strawberry"); // ["Strawberry", "Banana"]`;

  const translations = useTranslations(arraysManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("am_add_and_remove_title")}</span>
      <ul>
        <li>
          <p>
            <strong>push: </strong>
            {mainT("am_add_and_remove_explanation_one")}
          </p>
        </li>
        <li>
          <p>
            <strong>pop: </strong>
            {mainT("am_add_and_remove_explanation_two")}
          </p>
        </li>
        <li>
          <p>
            <strong>shift: </strong>
            {mainT("am_add_and_remove_explanation_three")}
          </p>
        </li>
        <li>
          <p>
            <strong>unshift: </strong>
            {mainT("am_add_and_remove_explanation_four")}
          </p>
        </li>
      </ul>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
