import React from "react";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";
import { ObjectTypes } from "./_components/ObjectTypes";
import initTranslations from "@/app/i18n";

interface JavaScriptPageProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["javascript"];

const JavaScriptPage = async ({ params: { locale } }: JavaScriptPageProps) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <h1>JavaScript</h1>
      <p>{t("javascript_definition")}</p>
      <PrimitiveTypes params={{ locale }} />
      <ObjectTypes params={{ locale }} />
    </>
  );
};

export default JavaScriptPage;
