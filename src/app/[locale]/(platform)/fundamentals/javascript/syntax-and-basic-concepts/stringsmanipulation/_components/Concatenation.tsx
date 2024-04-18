"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { stringsManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const Concatenation = () => {
  const codeToCopy = `
    let saludo = "Hola";
    let nombre = "Mundo";
    
    console.log(saludo + " " + nombre); // "Hola Mundo"
    console.log(saludo.concat(" ", nombre)); // "Hola Mundo"`;

  const translations = useTranslations(stringsManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("sm_concatenation_title")}</span>
      <p>{mainT("sm_concatenation_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
