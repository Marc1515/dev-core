"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { stringsManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const Transformation = () => {
  const codeToCopy = `
    let greeting = "Hello World";

    console.log(greeting.toUpperCase()); // "HELLO WORLD"
    console.log(greeting.toLowerCase()); // "hello world"`;

  const translations = useTranslations(stringsManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("sm_transformation_title")}</span>
      <p>
        <strong>toUpperCase()</strong> and <strong>toLowerCase(): </strong>{" "}
        {mainT("sm_transformation_explanation")}
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
