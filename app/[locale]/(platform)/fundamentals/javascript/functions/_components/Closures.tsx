"use client";

import React, { useEffect, useState } from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
import initTranslations from "@/app/i18n";
import { useLocale } from "@/contexts/LocaleContext";

const i18nNamespaces = ["functions"];

const Closures = () => {
  const codeToCopy = `
  
    function createGreeting(greeting) {
        return function(name) {
            return \`\${greeting}, \${name}!\`;
        };
    }

    const sayHello = createGreeting('Hello');
    const sayHi = createGreeting('Hi');

    console.log(sayHello('Alice')); // "Hello, Alice!"
    console.log(sayHi('Bob')); // "Hi, Bob!"`;

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
      <span>{t("closures_title")}</span>
      <p>{t("closures_explanation")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default Closures;
