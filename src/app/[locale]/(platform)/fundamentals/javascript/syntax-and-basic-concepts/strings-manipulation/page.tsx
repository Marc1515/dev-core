import React from "react";
import initTranslations from "@/app/i18n";
import { stringsManipulationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { StringsManipulation } from "./_components/StringsManipulation";

interface StringsManipulationPageProps {
  params: {
    locale: string;
  };
}

const StringsManipulationPage = async ({
  params: { locale },
}: StringsManipulationPageProps) => {
  const { t } = await initTranslations(locale, stringsManipulationNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <StringsManipulation data={data} />
    </div>
  );
};

export default StringsManipulationPage;
