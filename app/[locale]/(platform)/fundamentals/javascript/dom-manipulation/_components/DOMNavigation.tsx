"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { domManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const DOMNavigation = () => {
  const codeToCopy1 = `
    // Accessing child nodes
    const parent = document.getElementById('parent');
    const firstChild = parent.childNodes[0];
    
    // Getting the next sibling
    const nextSibling = firstChild.nextSibling;
    
    // Accessing the parent node
    const child = document.getElementById('child');
    const parentNode = child.parentNode;`;

  const codeToCopy2 = `
    // Find elements by tag name
    const divs = document.getElementsByTagName('div');
    
    // Find elements by class name
    const specialElements = document.getElementsByClassName('special');
    
    // Find an element with a CSS selector
    const uniqueElement = document.querySelector('#unique-element');`;

  const translations = useTranslations(domManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <div>
        <span>{mainT("domm_dom_navigation_title")}</span>
      </div>
      <strong>{mainT("domm_dn_parent_child_siviling_nodes_title")}</strong>
      <p>{mainT("domm_dn_parent_child_siviling_nodes_explanation")}</p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <strong>{mainT("domm_dn_searching_the_dom_three_title")}</strong>
      <p>{mainT("domm_dn_searching_the_dom_three_explanation")}</p>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
    </div>
  );
};
