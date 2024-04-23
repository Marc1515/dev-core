import React from "react";
import initTranslations from "@/app/i18n";
import { JSONSyntaxPageTypes } from "./types";
import { jsonSyntaxNamespaces } from "@/constants/translationNamespaces";
import { JSONSyntax } from "./_components/JSONSyntax";

interface JSONSyntaxPageProps {
  params: {
    locale: string;
  };
}

const JSONSyntaxPage = async ({ params: { locale } }: JSONSyntaxPageProps) => {
  const { t } = await initTranslations(locale, jsonSyntaxNamespaces);
  const data = t("data", {
    returnObjects: true,
  }) as JSONSyntaxPageTypes["data"];

  return (
    <div>
      <JSONSyntax data={data} />
    </div>
  );
};

export default JSONSyntaxPage;
