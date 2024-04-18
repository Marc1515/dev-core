"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { stringsManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const CharactersAccess = () => {
  const codeToCopy = `
    let texto = "Hola";
    
    console.log(texto[0]); // "H"`;

  const translations = useTranslations(stringsManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("sm_characters_access_title")}</span>
      <p>{mainT("sm_characters_access_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
