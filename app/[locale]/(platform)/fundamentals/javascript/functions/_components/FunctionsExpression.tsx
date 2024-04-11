"use client";

import React, { useEffect, useState } from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
import { useLocale } from "@/contexts/LocaleContext";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["functions"];

const FunctionsExpressions = () => {
  const codeToCopy = `
  
    const sayGoodbye = function(name) {
        return \`Goodbye, \${name}!\`;
    };

    console.log(sayGoodbye('Carlos')); // "Goodbye, Carlos!"`;

  const [translations, setTranslations] = useState<{
    t: (key: string) => string;
  } | null>(null);

  const { locale } = useLocale();

  useEffect(() => {
    const loadTranslations = async () => {
      const translationsResult = await initTranslations(locale, i18nNamespaces);
      setTranslations(translationsResult);
    };

    loadTranslations();
  }, [locale]);

  if (!translations) {
    return <div>Loading...</div>;
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
