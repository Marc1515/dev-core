"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { stringsManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const SearchAndReplace = () => {
  const codeToCopy = `
    let frase = "Bienvenido al mundo de JavaScript";

    console.log(frase.indexOf("mundo")); // 15
    console.log(frase.includes("JavaScript")); // true
    console.log(frase.replace("JavaScript", "JS")); // "Bienvenido al mundo de JS"`;

  const translations = useTranslations(stringsManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("sm_search_and_replace_title")}</span>
      <ul>
        <li>
          <p>
            <strong>indexOf(): </strong>
            {mainT("sm_search_and_replace_explanation_one")}
          </p>
        </li>
        <li>
          <p>
            <strong>includes(): </strong>
            {mainT("sm_search_and_replace_explanation_two")}
          </p>
        </li>
        <li>
          <p>
            <strong>replace(): </strong>
            {mainT("sm_search_and_replace_explanation_three")}
          </p>
        </li>
      </ul>
      <p>{mainT("sm_characters_access_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
