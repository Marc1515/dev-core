import React from "react";
import initTranslations from "@/app/i18n";
import { variablesNamespaces } from "@/constants/translationNamespaces";
import { Variables } from "./_components/Variables";

interface VariablesProps {
  params: {
    locale: string;
  };
}

const VariablesPage = async ({ params: { locale } }: VariablesProps) => {
  const { t } = await initTranslations(locale, variablesNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <Variables data={data} />
    </div>
  );
};

export default VariablesPage;
