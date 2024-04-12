"use client";
import React from "react";
import { primitiveTypesNamespaces } from "@/constants/translationNamespaces";
import { useTranslations } from "@/hooks/useTranslations";

export const PrimitiveTypes = () => {
  const translations = useTranslations([primitiveTypesNamespaces[1]]);

  if (!translations) {
    return;
  }

  const { t } = translations;

  return (
    <div>
      <span>{t("primitive_types_name")}</span>
      <p>{t("primitive_type_introduction")}</p>
      <ul>
        <li>
          <p>
            <strong>String:</strong> {t("string_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>Number:</strong> {t("number_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>BigInt:</strong> {t("bigint_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>Boolean:</strong> {t("boolean_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>Undefined:</strong> {t("undefined_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>Null:</strong> {t("null_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>Symbol:</strong> {t("symbol_explanation")}
          </p>
        </li>
      </ul>
    </div>
  );
};
