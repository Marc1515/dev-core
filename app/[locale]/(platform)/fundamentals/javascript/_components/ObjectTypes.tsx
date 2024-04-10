"use client";

import initTranslations from "@/app/i18n";
import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const i18nNamespaces = ["objectTypes"];

export const ObjectTypes = () => {
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
            <strong>
              <Link href={"/fundamentals/javascript/functions"}>Function:</Link>
            </strong>
          </p>{" "}
          {t("function_explanation")}
        </li>
      </ul>
    </div>
  );
};
