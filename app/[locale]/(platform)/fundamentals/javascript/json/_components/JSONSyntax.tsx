"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { jsonNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const JSONSyntax = () => {
  const codeToCopy1 = `
    {
        "name": "John",
        "age": 30,
        "employed": true
    }`;

  const codeToCopy2 = `
    [
        "apple",
        "banana",
        "cherry"
    ]`;

  const translations = useTranslations(jsonNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <span>{mainT("syntax_json_title")}</span>
      <p>{mainT("syntax_json_explanation")}</p>
      <span>{mainT("sj_data_in_key_value_pairs_title")}</span>
      <ul>
        <li>
          <p>{mainT("sj_data_in_key_value_pairs_explanation_one")}</p>
        </li>
        <li>
          <p>{mainT("sj_data_in_key_value_pairs_explanation_two")}</p>
        </li>
        <li>
          <p>{mainT("sj_data_in_key_value_pairs_explanation_three")}</p>
        </li>
      </ul>
      <span>{mainT("sj_objects_title")}</span>
      <p>{mainT("sj_objects_explanation")}</p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <span>Arrays</span>
      <ul>
        <li>
          <p>{mainT("sj_arrays_explanation_one")}</p>
        </li>
        <li>
          <p>{mainT("sj_arrays_explanation_two")}</p>
        </li>
      </ul>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
      <span>{mainT("sj_valid_data_formats_title")}</span>
      <ul>
        <li>
          <p>{mainT("sj_valid_data_formats_explanation_one")}</p>
        </li>
        <li>
          <p>{mainT("sj_valid_data_formats_explanation_two")}</p>
        </li>
        <li>
          <p>{mainT("sj_valid_data_formats_explanation_three")}</p>
        </li>
      </ul>
      <span>{mainT("sj_advantages_of_json_title")}</span>
      <ul>
        <li>
          <p>{mainT("sj_advantages_of_json_explanation_one")}</p>
        </li>
        <li>
          <p>{mainT("sj_advantages_of_json_explanation_two")}</p>
        </li>
        <li>
          <p>{mainT("sj_advantages_of_json_explanation_three")}</p>
        </li>
      </ul>
      <span>{mainT("sj_common_uses_title")}</span>
      <ul>
        <li>
          <p>{mainT("sj_common_uses_one")}</p>
        </li>
        <li>
          <p>{mainT("sj_common_uses_two")}</p>
        </li>
      </ul>
    </div>
  );
};
