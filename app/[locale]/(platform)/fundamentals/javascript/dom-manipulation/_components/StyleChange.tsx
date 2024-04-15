"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { domManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const StyleChange = () => {
  const codeToCopy1 = `
    // Change the background color of an element
    const element = document.getElementById('example');
    element.style.backgroundColor = 'blue';`;

  const codeToCopy2 = `
    // Add a CSS class to an element
    const element = document.getElementById('example');
    element.classList.add('new-class');
    
    // Remove a CSS class
    element.classList.remove('old-class');
    
    // Toggle a CSS class
    element.classList.toggle('active');`;

  const translations = useTranslations(domManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <div>
        <span>{mainT("domm_element_content_modification_title")}</span>
      </div>
      <strong>{mainT("domm_sc_accessing_styles_title")}</strong>
      <p>{mainT("domm_ecm_textContent_explanation")}</p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <strong>{mainT("domm_sc_manipulating_classes_title")}</strong>
      <p>{mainT("domm_ecm_innerHTML_explanation")}</p>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
    </div>
  );
};
