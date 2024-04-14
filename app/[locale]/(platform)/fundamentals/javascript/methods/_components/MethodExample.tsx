"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { methodsNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const MethodExample = () => {
  const codeToCopy = `
    let text = "Hello, world!";
    console.log(text.toUpperCase());  // "HELLO, WORLD!"`;

  const translations = useTranslations(methodsNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <p>{mainT("methods_example_introduction")}</p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
      <p>{mainT("methods_example_explanation")}</p>
      <span>{mainT("methods_example_key_differences_title")}</span>
      <ul>
        <li>
          <p>{mainT("methods_example_key_differences_context")}</p>
        </li>
        <li>
          <p>{mainT("methods_example_key_differences_call")}</p>
        </li>
        <li>
          <p>{mainT("methods_example_key_differences_purpose")}</p>
        </li>
      </ul>
      <p>{mainT("methods_example_conclusion")}</p>
    </div>
  );
};
