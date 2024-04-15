"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { domManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const AddOrRemoveElements = () => {
  const codeToCopy1 = `
    // Create a new div and append it to the body
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Hello, new element!';
    document.body.appendChild(newDiv);`;

  const codeToCopy2 = `
    // Inserting before an existing element
    const referenceElement = document.getElementById('existing-element');
    document.body.insertBefore(newDiv, referenceElement);`;

  const codeToCopy3 = `
    // Remove an element directly
    const elementToRemove = document.getElementById('remove-me');
    elementToRemove.remove();
    
    // Removing using removeChild
    const parent = elementToRemove.parentNode;
    parent.removeChild(elementToRemove);`;

  const translations = useTranslations(domManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <div>
        <span>{mainT("domm_add_or_remove_elements_title")}</span>
      </div>
      <strong>{mainT("domm_are_creating_elements_title")}</strong>
      <p>{mainT("domm_are_creating_elements_explanation")}</p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <strong>{mainT("domm_are_inserting_elements_title")}</strong>
      <p>{mainT("domm_are_inserting_elements_explanation")}</p>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
      <strong>{mainT("domm_are_removing_elements_title")}</strong>
      <p>{mainT("domm_are_removing_elements_explanation")}</p>
      <div>
        <pre>{codeToCopy3}</pre>
        <ClipboardButton textToCopy={codeToCopy3} />
      </div>
    </div>
  );
};
