"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { objectTypesNamespaces } from "@/constants/translationNamespaces";

export const ObjectTypes = () => {
  const translations = useTranslations(objectTypesNamespaces);

  if (!translations) {
    return;
  }

  const { t } = translations;

  return (
    <div>
      <span>{t("object_types_name")}</span>
      <p>{t("object_type_introduction")}</p>
      <ul>
        <li>
          <p>
            <strong>Object:</strong> {t("object_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>Array:</strong> {t("array_explanation")}
          </p>
        </li>
        <li>
          <p>
            <strong>Function:</strong> {t("function_explanation")}
          </p>
        </li>
      </ul>
    </div>
  );
};
