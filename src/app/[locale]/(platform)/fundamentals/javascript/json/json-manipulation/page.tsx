import initTranslations from "@/app/i18n";
import { jsonManipulationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import React from "react";
import { JSONManipulation } from "./_components/JSONManipulation";

interface JSONManipulationPageProps {
  params: {
    locale: string;
  };
}

const JSONManipulationPage = async ({
  params: { locale },
}: JSONManipulationPageProps) => {
  const { t } = await initTranslations(locale, jsonManipulationNamespaces);
  const data = t("data", {
    returnObjects: true,
  });

  return (
    <div>
      <JSONManipulation data={data} />
    </div>
  );
};

export default JSONManipulationPage;
