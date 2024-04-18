"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { jsonNamespaces } from "@/constants/translationNamespaces";

export const JSONSyntax = () => {
  const translations = useTranslations(jsonNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  const title = mainT("json_syntax.data_in_key_value_pairs.title");
  const pointOne = mainT("json_syntax.data_in_key_value_pairs.point_one");
  const pointTwo = mainT("json_syntax.data_in_key_value_pairs.point_two");
  const pointThree = mainT("json_syntax.data_in_key_value_pairs.point_three");

  return (
    <div>
      <span>{title}</span>
      <ul>
        <li>
          <p>{pointOne}</p>
        </li>
        <li>
          <p>{pointTwo}</p>
        </li>
        <li>
          <p>{pointThree}</p>
        </li>
      </ul>
    </div>
  );
};
