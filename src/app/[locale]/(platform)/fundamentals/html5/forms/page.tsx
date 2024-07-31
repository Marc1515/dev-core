import React from "react";
import initTranslations from "@/app/i18n";
import { formsNamespaces } from "@/constants/namespaces/html5Namespaces";
import { Forms } from "./_components/Forms";

interface VariablesProps {
  params: {
    locale: string;
  };
}

const VariablesPage = async ({ params: { locale } }: VariablesProps) => {
  const { t } = await initTranslations(locale, formsNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <Forms data={data} />
    </div>
  );
};

export default VariablesPage;
