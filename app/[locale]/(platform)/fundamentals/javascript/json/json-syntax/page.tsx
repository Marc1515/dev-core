import React from "react";
import initTranslations from "@/app/i18n";
import { jsonNamespaces } from "@/constants/translationNamespaces";
import { JSONSyntax } from "./_components/JSONSyntax";
import { JSONObjects } from "./_components/JSONObjects";
import { JSONArrays } from "./_components/JSONArrays";
import { JSONValidDataFormats } from "./_components/JSONValidDataFormats";

interface JSONSyntaxPageProps {
  params: {
    locale: string;
  };
}

const JSONSyntaxPage = async ({ params: { locale } }: JSONSyntaxPageProps) => {
  const { t: mainT } = await initTranslations(locale, jsonNamespaces);

  const title = mainT("json_syntax.title");
  const introduction = mainT("json_syntax.explanation");

  return (
    <div>
      <h1>JSON</h1>
      <p>{title}</p>
      <p>{introduction}</p>
      <JSONSyntax />
      <JSONObjects />
      <JSONArrays />
      <JSONValidDataFormats />
    </div>
  );
};

export default JSONSyntaxPage;
