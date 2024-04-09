import initTranslations from "@/app/i18n";
import Link from "next/link";
import React from "react";

interface ObjectTypesProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["objectTypes"];

export const ObjectTypes = async ({ params: { locale } }: ObjectTypesProps) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

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
