"use client";

import React, { useEffect, useState } from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
import initTranslations from "@/app/i18n";
import { useLocale } from "@/contexts/LocaleContext";

const i18nNamespaces = ["functions"];

const ConstructorFunctions = () => {
  const codeToCopy = `
  
    function Person(name) {
        this.name = name;
        this.greet = function() {
            return \`Hello, I'm \${this.name}\`;
        };
    }

    const ana = new Person('Ana');

    console.log(ana.greet()); // "Hello, I'm Ana";`;

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
      <span>{t("constructor_functions_title")}</span>
      <p>{t("constructor_functions_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default ConstructorFunctions;
