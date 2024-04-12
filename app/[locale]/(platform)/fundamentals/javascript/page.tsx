import React from "react";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";
import { ObjectTypes } from "./_components/ObjectTypes";
import initTranslations from "@/app/i18n";
import { javascriptTypesNamespaces } from "@/constants/translationNamespaces";

interface JavaScriptPageProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = javascriptTypesNamespaces.filter(
  (namespace) => namespace === javascriptTypesNamespaces[1]
);

const JavaScriptPage = async ({ params: { locale } }: JavaScriptPageProps) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <h1>JavaScript</h1>
      <p>{t("javascript_definition")}</p>
      <PrimitiveTypes />
      <ObjectTypes />
    </>
  );
};

export default JavaScriptPage;
