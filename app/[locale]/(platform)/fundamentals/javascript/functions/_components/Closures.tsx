"use client";

import React from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
import { useTranslations } from "@/hooks/useTranslations";
import { functionsNamespaces } from "@/constants/translationNamespaces";

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

  const translations = useTranslations([functionsNamespaces[1]]);

  if (!translations) {
    return;
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
