import React from "react";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";
import { ObjectTypes } from "./_components/ObjectTypes";
import initTranslations from "@/app/i18n";

interface JavaScriptPageProps {
  params: {
    locale: string;
  };
}

const JavaScriptPage = async ({ params: { locale } }: JavaScriptPageProps) => {
  const { t } = await initTranslations(locale, ["javascript"]);
  return (
    <div>
      <h1>JavaScript</h1>
      <p>{t("javascript_definition")}</p>
      <PrimitiveTypes />
      <ObjectTypes />
    </div>
  );
};

export default JavaScriptPage;
