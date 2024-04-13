"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

export const ComparisionOperators = () => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{t("comparision_operators_title")}</span>
      <p>{t("comparision_operators_description")}</p>
      <ul>
        <li>
          <p>
            <strong>`==`</strong>
            {t("equal_to_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`===`</strong>
            {t("strictly_equal_to_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`!=`</strong>
            {t("not_equal_to_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`!==`</strong>
            {t("strictly_not_equal_to_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`{">"}`</strong>
            {t("greater_than_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`{"<"}`</strong>
            {t("less_than_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`{">="}`</strong>
            {t("greater_than_or_equal_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`{"<="}`</strong>
            {t("less_than_or_equal_operator_explanation")}
          </p>
        </li>
      </ul>
    </div>
  );
};
