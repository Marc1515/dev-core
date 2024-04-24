import React from "react";
import { selectElementsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import initTranslations from "@/app/i18n";
import { SelectElements } from "./_components/SelectElements";

interface SelectElementsPageProps {
  params: {
    locale: string;
  };
}

const SelectElementsPage = async ({
  params: { locale },
}: SelectElementsPageProps) => {
  const { t } = await initTranslations(locale, selectElementsNamespaces);
  const data = t("data", { returnObjects: true });
  return (
    <div>
      <SelectElements data={data} />
    </div>
  );
};

export default SelectElementsPage;
