"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { functionsNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const GeneratorFunctions = () => {
  const codeToCopy = `
  
    function* generateId() {
        let id = 0;
        while(true) {
            yield id++;
        }
    }

    const gen = generateId();

    console.log(gen.next().value); // 0
    
    console.log(gen.next().value); // 1`;

  const translations = useTranslations(functionsNamespaces);

  if (!translations) {
    return;
  }

  const { t } = translations;

  return (
    <div>
      <span>{t("generator_functions_title")}</span>
      <p>{t("generator_functions_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default GeneratorFunctions;
