"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { domManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const SelectDOMElements = () => {
  const codeToCopy1 = `
    // HTML: <div id="container">Hello World</div>
    var element = document.getElementById('container');
    console.log(element.textContent);  // Output: "Hello World"`;

  const codeToCopy2 = `
    // HTML: <p>First paragraph</p><p>Second paragraph</p>
    var paragraphs = document.getElementsByTagName('p');
    console.log(paragraphs[0].textContent);  // Output: "First paragraph"
    console.log(paragraphs[1].textContent);  // Output: "Second paragraph"`;

  const codeToCopy3 = `
    // HTML: <div class="highlight">Highlighted</div><div class="highlight">Also highlighted</div>
    var highlightedItems = document.getElementsByClassName('highlight');
    console.log(highlightedItems[0].textContent);  // Output: "Highlighted"
    console.log(highlightedItems[1].textContent);  // Output: "Also highlighted"`;

  const codeToCopy4 = `
    // HTML: <div class="container">Container</div><div class="container">Another container</div>
    var container = document.querySelector('.container');
    console.log(container.textContent);  // Output: "Container"`;

  const codeToCopy5 = `
    // HTML: <span class="item">Item 1</span><span class="item">Item 2</span>
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        console.log(item.textContent);  // Outputs: "Item 1", "Item 2"
    });`;

  const translations = useTranslations(domManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <div>
        <span>{mainT("domm_select_dom_elements_title")}</span>
      </div>
      <strong>GetElementByID</strong>
      <p>{mainT("domm_getElementById_explanation")}</p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <strong>GetElementByTagName</strong>
      <p>{mainT("domm_getElementsByTagName_explanation")}</p>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
      <strong>GetElementByClassName</strong>
      <p>{mainT("domm_getElementsByClassName_explanation")}</p>
      <div>
        <pre>{codeToCopy3}</pre>
        <ClipboardButton textToCopy={codeToCopy3} />
      </div>
      <strong>QuerySelector</strong>
      <p>{mainT("domm_querySelector_explanation")}</p>
      <div>
        <pre>{codeToCopy4}</pre>
        <ClipboardButton textToCopy={codeToCopy4} />
      </div>
      <strong>QuerySelectorAll</strong>
      <p>{mainT("domm_querySelectorAll_explanation")}</p>
      <div>
        <pre>{codeToCopy5}</pre>
        <ClipboardButton textToCopy={codeToCopy5} />
      </div>
    </div>
  );
};
