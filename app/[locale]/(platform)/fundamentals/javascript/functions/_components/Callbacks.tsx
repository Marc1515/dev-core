"use client";

import React, { useEffect, useState } from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
import initTranslations from "@/app/i18n";
import { useLocale } from "@/contexts/LocaleContext";

const i18nNamespaces = ["functions"];

const Callbacks = () => {
  const codeToCopy = `
  
    function processUserInput(callback) {
        const name = prompt('Please enter your name.');
        callback(name);
    }

    processUserInput(function(name) {
        console.log('Hello, ' + name);
    });`;

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
      <span>{t("callbacks_title")}</span>
      <p>{t("callbacks_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default Callbacks;
