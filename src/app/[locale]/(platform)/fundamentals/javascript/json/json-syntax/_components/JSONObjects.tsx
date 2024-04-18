"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { jsonNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const JSONObjects = () => {
  const codeToCopy1 = `
    {
        "name": "John",
        "age": 30,
        "employed": true
    }`;

  const translations = useTranslations(jsonNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  const title = mainT("json_syntax.objects.title");
  const description = mainT("json_syntax.objects.description");

  return (
    <div>
      <span>{title}</span>
      <p>{description}</p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
    </div>
  );
};
