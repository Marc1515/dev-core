"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { functionsNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const ArrowFunctions = () => {
  const codeToCopy = `
  
    const add = (a, b) => a + b;
        console.log(add(5, 3)); // 8
    `;

  const translations = useTranslations(functionsNamespaces);

  if (!translations) {
    return;
  }

  const { t } = translations;

  return (
    <div>
      <span>{t("arrow_functions_title")}</span>
      <p>{t("arrow_functions_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default ArrowFunctions;
