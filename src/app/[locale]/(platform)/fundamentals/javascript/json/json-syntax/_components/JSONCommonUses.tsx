"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { jsonNamespaces } from "@/constants/translationNamespaces";

export const JSONCommonUses = () => {
  const translations = useTranslations(jsonNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  const title = mainT("json_syntax.common_uses.title");
  const pointOne = mainT("json_syntax.common_uses.point_one");
  const pointTwo = mainT("json_syntax.common_uses.point_two");

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
      </ul>
    </div>
  );
};
