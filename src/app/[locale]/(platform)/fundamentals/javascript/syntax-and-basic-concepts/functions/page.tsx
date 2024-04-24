import React from "react";

import initTranslations from "@/app/i18n";
import { functionsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { Functions } from "./_components/Functions";

interface FunctionPageProps {
  params: {
    locale: string;
  };
}

const FunctionsPage = async ({ params: { locale } }: FunctionPageProps) => {
  const { t } = await initTranslations(locale, functionsNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <Functions data={data} />
    </div>
  );
};

export default FunctionsPage;
