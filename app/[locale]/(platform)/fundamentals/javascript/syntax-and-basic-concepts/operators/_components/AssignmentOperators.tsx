"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

export const AssignmentOperators = () => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{t("assignment_operators_title")}</span>
      <p>{t("assignment_operators_description")}</p>
      <ul>
        <li>
          <p>
            <strong>`=`</strong>
            {t("assignment_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`+=`</strong>
            {t("add_and_assign_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`-=`</strong>
            {t("subtract_and_assign_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`*=`</strong>
            {t("multiply_and_assign_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`/=`</strong>
            {t("divide_and_assign_operator_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>`%=`</strong>
            {t("modulus_and_assign_operator_explanation")}
          </p>
        </li>
      </ul>
    </div>
  );
};
