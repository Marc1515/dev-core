import React from "react";
import initTranslations from "@/app/i18n";
import { jsonSyntaxNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
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
  });

  return (
    <div>
      <JSONSyntax data={data} />
    </div>
  );
};

export default JSONSyntaxPage;
