"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { stringsManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const SliceAndExtract = () => {
  const codeToCopy = `
    let str = "Hello World";

    console.log(str.slice(0, 5)); // "Hello"
    console.log(str.slice(6)); // "World"`;

  const translations = useTranslations(stringsManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("sm_slicing_and_extracting_title")}</span>

      <p>
        <strong>slice(): </strong>
        {mainT("sm_slicing_and_extracting_explanation")}
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};
