"use client";

import React from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

import { useTranslations } from "@/hooks/useTranslations";
import { functionsNamespaces } from "@/constants/translationNamespaces";

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

  const translations = useTranslations(functionsNamespaces);

  if (!translations) {
    return;
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
