"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { functionsNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const AsyncFunctions = () => {
  const codeToCopy = `
  
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }`;

  const translations = useTranslations(functionsNamespaces);

  if (!translations) {
    return;
  }

  const { t } = translations;

  return (
    <div>
      <span>{t("async_functions_title")}</span>
      <p>{t("async_functions_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default AsyncFunctions;
