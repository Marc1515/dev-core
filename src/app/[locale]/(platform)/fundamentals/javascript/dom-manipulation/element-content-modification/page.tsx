import React from "react";

import initTranslations from "@/app/i18n";
import { elementContentModificationNamespaces } from "@/constants/translationNamespaces";
import { ElementContentModification } from "./_components/ElementContentModification";

interface SelectElementsPageProps {
  params: {
    locale: string;
  };
}

const SelectElementsPage = async ({
  params: { locale },
}: SelectElementsPageProps) => {
  const { t } = await initTranslations(
    locale,
    elementContentModificationNamespaces
  );
  const data = t("data", { returnObjects: true });
  return (
    <div>
      <ElementContentModification data={data} />
    </div>
  );
};

export default SelectElementsPage;
