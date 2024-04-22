import React from "react";

import initTranslations from "@/app/i18n";
import { addRemoveElementsNamespaces } from "@/constants/translationNamespaces";
import { AddRemoveElements } from "./_components/AddRemoveElements";

interface AddRemoveElementsPageProps {
  params: {
    locale: string;
  };
}

const AddRemoveElementsPage = async ({
  params: { locale },
}: AddRemoveElementsPageProps) => {
  const { t } = await initTranslations(locale, addRemoveElementsNamespaces);
  const data = t("data", { returnObjects: true });
  return (
    <div>
      <AddRemoveElements data={data} />
    </div>
  );
};

export default AddRemoveElementsPage;
