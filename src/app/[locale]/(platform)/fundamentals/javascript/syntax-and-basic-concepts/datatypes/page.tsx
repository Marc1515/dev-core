import React from "react";

import initTranslations from "@/app/i18n";
import { dataTypesNamespaces } from "@/constants/translationNamespaces";
import { DataTypes } from "./_components/DataTypes";

interface DataTypesProps {
  params: {
    locale: string;
  };
}

const DataTypesPage = async ({ params: { locale } }: DataTypesProps) => {
  const { t } = await initTranslations(locale, dataTypesNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    /* Data Types */
    <div>
      <DataTypes data={data} />
    </div>
  );
};

export default DataTypesPage;
