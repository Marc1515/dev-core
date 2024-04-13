"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

export const LogicalOperators = () => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{t("logical_operators_title")}</span>
      <p>{t("logical_operators_description")}</p>
      <ul>
        <li>
          <p>
            <strong>`&&`</strong>
            {t("and_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`||`</strong>
            {t("or_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`!`</strong>
            {t("not_operator_explanation")}
          </p>
        </li>
      </ul>
    </div>
  );
};
