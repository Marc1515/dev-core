import React from "react";
import initTranslations from "@/app/i18n";
import { arraysManipulationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { ArraysManipulation } from "./_components/ArraysManipulation";

interface ArraysManipulationPageProps {
  params: {
    locale: string;
  };
}

const ArraysManipulationPage = async ({
  params: { locale },
}: ArraysManipulationPageProps) => {
  const { t } = await initTranslations(locale, arraysManipulationNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <ArraysManipulation data={data} />
    </div>
  );
};

export default ArraysManipulationPage;
