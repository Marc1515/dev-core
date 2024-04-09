import initTranslations from "@/app/i18n";
import React from "react";

interface PrimitiveTypesProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["primitiveTypes"];

export const PrimitiveTypes = async ({
  params: { locale },
}: PrimitiveTypesProps) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

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
