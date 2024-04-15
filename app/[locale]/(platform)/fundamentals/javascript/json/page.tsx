import React from "react";
import initTranslations from "@/app/i18n";
import { jsonNamespaces } from "@/constants/translationNamespaces";
import { JSONSyntax } from "./_components/JSONSyntax";

interface JSONPageProps {
  params: {
    locale: string;
  };
}

const JSONPage = async ({ params: { locale } }: JSONPageProps) => {
  const { t: mainT } = await initTranslations(locale, jsonNamespaces);

  return (
    <div>
      <h1>JSON</h1>
      <p>{mainT("json_description")}</p>
      <JSONSyntax />
    </div>
  );
};

export default JSONPage;
