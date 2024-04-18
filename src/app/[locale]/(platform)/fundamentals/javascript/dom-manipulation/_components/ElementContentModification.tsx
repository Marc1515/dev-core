"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { domManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const ElementContentModification = () => {
  const codeToCopy1 = `
    // Select an element and change its text content
    const element = document.getElementById('example');
    element.textContent = 'New text content';`;

  const codeToCopy2 = `
    // Select an element and change its HTML content
    const element = document.getElementById('example');
    element.innerHTML = '<strong>Bold new content</strong>';`;

  const translations = useTranslations(domManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <div>
        <span>{mainT("domm_element_content_modification_title")}</span>
      </div>
      <strong>textContent</strong>
      <p>{mainT("domm_ecm_textContent_explanation")}</p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <strong>innerHTML</strong>
      <p>{mainT("domm_ecm_innerHTML_explanation")}</p>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
    </div>
  );
};
