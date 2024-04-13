"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

export const StringOperator = () => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{t("string_operator_title")}</span>
      <p>{t("string_operator_description")}</p>
      <ul>
        <li>
          <p>
            <strong>`+`</strong>
            {t("string_operator_explanation")}
          </p>
        </li>
      </ul>
    </div>
  );
};
