"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

export const ArithmeticOperators = () => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{t("arithmetic_operators_title")}</span>
      <p>{t("arithmetic_operators_description")}</p>
      <ul>
        <li>
          <p>
            <strong>`+`</strong>
            {t("addition_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`-`</strong>
            {t("subtraction_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`*`</strong>
            {t("multiplication_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`/`</strong>
            {t("division_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`%`</strong>
            {t("modulus_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`++`</strong>
            {t("increment_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`--`</strong>
            {t("decrement_operator_explanation")}
          </p>
        </li>
      </ul>
    </div>
  );
};
