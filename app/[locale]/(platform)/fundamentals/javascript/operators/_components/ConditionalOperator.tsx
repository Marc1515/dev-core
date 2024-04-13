"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

export const ConditionalOperators = () => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{t("conditional_operator_title")}</span>
      <p>{t("conditional_operator_description")}</p>
      <ul>
        <li>
          <p>
            <strong>`condition ? value1 : value2`</strong>
            {t("conditional_operator_explanation")}
          </p>
        </li>
      </ul>
    </div>
  );
};
