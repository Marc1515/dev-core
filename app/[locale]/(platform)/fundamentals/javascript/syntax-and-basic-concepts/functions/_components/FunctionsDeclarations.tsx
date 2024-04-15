"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { functionsNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const FunctionsDeclarations = () => {
  const codeToCopy = `
  
    function greet(name) {
      return \`Hello, \${name}!\`;
    }
    console.log(greet('Ana')); // "Hello, Ana!"`;

  const translations = useTranslations(functionsNamespaces);

  if (!translations) {
    return;
  }

  const { t } = translations;

  return (
    <div>
      <span>{t("functions_declarations_title")}</span>
      <p>{t("functions_declarations_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default FunctionsDeclarations;
