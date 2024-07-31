import React from "react";
import initTranslations from "@/app/i18n";
import { html5IntroductionNamespaces } from "@/constants/namespaces/html5Namespaces";
import { Introduction } from "./_components/Introduction";

interface VariablesProps {
  params: {
    locale: string;
  };
}

const VariablesPage = async ({ params: { locale } }: VariablesProps) => {
  const { t } = await initTranslations(locale, html5IntroductionNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <Introduction data={data} />
    </div>
  );
};

export default VariablesPage;
