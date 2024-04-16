"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { jsonNamespaces } from "@/constants/translationNamespaces";

export const JSONValidDataFormats = () => {
  const translations = useTranslations(jsonNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  const pointOne = mainT("json_syntax.arrays.point_one");
  const pointTwo = mainT("json_syntax.arrays.point_two");

  return (
    <div>
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
