"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

export const TypeOperators = () => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{t("type_operators_title")}</span>
      <ul>
        <li>
          <p>
            <strong>`typeof`</strong>
            {t("type_operator_typeof")}
          </p>
        </li>
        <li>
          <p>
            <strong>`instanceof`</strong>
            {t("type_operator_instanceof")}
          </p>
        </li>
      </ul>
    </div>
  );
};
