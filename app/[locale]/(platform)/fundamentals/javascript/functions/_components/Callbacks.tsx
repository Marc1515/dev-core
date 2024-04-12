"use client";

import React from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";
import { useTranslations } from "@/hooks/useTranslations";
import { functionsNamespaces } from "@/constants/translationNamespaces";

const Callbacks = () => {
  const codeToCopy = `
  
    function processUserInput(callback) {
        const name = prompt('Please enter your name.');
        callback(name);
    }

    processUserInput(function(name) {
        console.log('Hello, ' + name);
    });`;

  const translations = useTranslations([functionsNamespaces[1]]);

  if (!translations) {
    return;
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
