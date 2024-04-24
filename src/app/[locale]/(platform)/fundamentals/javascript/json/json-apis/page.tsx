import React from "react";

import initTranslations from "@/app/i18n";
import { jsonApisNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { JSONApis } from "./_components/JSONApis";

interface JSONApisPageProps {
  params: {
    locale: string;
  };
}

const JSONApisPage = async ({ params: { locale } }: JSONApisPageProps) => {
  const { t } = await initTranslations(locale, jsonApisNamespaces);
  const data = t("data", {
    returnObjects: true,
  });

  return (
    <div>
      <JSONApis data={data} />
    </div>
  );
};

export default JSONApisPage;
