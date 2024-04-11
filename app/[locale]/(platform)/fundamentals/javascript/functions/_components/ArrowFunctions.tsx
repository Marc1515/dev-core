"use client";

import React, { useEffect, useState } from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
import initTranslations from "@/app/i18n";
import { useLocale } from "@/contexts/LocaleContext";

const i18nNamespaces = ["functions"];

const ArrowFunctions = () => {
  const codeToCopy = `
  
    const add = (a, b) => a + b;
        console.log(add(5, 3)); // 8
    `;

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
