"use client";
import React, { useEffect, useState } from "react";
import initTranslations from "@/app/i18n";
import { useLocale } from "@/contexts/LocaleContext";

const i18nNamespaces = ["primitiveTypes"];

export const PrimitiveTypes = () => {
  const [translations, setTranslations] = useState<{
    t: (key: string) => string;
  } | null>(null);

  const { locale } = useLocale();

  useEffect(() => {
    const loadTranslations = async () => {
      const translationsResult = await initTranslations(locale, i18nNamespaces);
      setTranslations(translationsResult);
    };

    loadTranslations();
  }, [locale]);

  if (!translations) {
    return <div>Loading...</div>;
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
