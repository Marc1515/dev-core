"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { functionsNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const FunctionsExpressions = () => {
  const codeToCopy = `
  
    const sayGoodbye = function(name) {
        return \`Goodbye, \${name}!\`;
    };

    console.log(sayGoodbye('Carlos')); // "Goodbye, Carlos!"`;

  const translations = useTranslations([functionsNamespaces[1]]);

  if (!translations) {
    return;
  }

  const { t } = translations;

  return (
    <div>
      <span>{t("functions_expressions_title")}</span>
      <p>{t("functions_expressions_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default FunctionsExpressions;
