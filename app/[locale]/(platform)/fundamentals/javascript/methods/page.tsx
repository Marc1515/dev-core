import React from "react";
import initTranslations from "@/app/i18n";
import {
  commonNamespaces,
  methodsNamespaces,
} from "@/constants/translationNamespaces";
import { MethodExample } from "./_components/MethodExample";

interface MethodsPageProps {
  params: {
    locale: string;
  };
}

const MethodsPage = async ({ params: { locale } }: MethodsPageProps) => {
  const { t: commonT } = await initTranslations(locale, commonNamespaces);
  const { t: mainT } = await initTranslations(locale, methodsNamespaces);

  return (
    <div>
      <h1>{commonT("methods_title")}</h1>
      <p>{mainT("methods_description")}</p>
      <MethodExample />
    </div>
  );
};

export default MethodsPage;
