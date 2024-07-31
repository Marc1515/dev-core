import React from "react";
import initTranslations from "@/app/i18n";
import { basicElementsAndTagsNamespaces } from "@/constants/namespaces/html5Namespaces";
import { BasicElementsAndTags } from "./_components/BasicElementsAndTags";

interface VariablesProps {
  params: {
    locale: string;
  };
}

const VariablesPage = async ({ params: { locale } }: VariablesProps) => {
  const { t } = await initTranslations(locale, basicElementsAndTagsNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <BasicElementsAndTags data={data} />
    </div>
  );
};

export default VariablesPage;
