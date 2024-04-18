"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { jsonNamespaces } from "@/constants/translationNamespaces";

export const JSONAdvantadges = () => {
  const translations = useTranslations(jsonNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  const title = mainT("json_syntax.advantages.title");
  const pointOne = mainT("json_syntax.advantages.point_one");
  const pointTwo = mainT("json_syntax.advantages.point_two");
  const pointThree = mainT("json_syntax.advantages.point_three");

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
