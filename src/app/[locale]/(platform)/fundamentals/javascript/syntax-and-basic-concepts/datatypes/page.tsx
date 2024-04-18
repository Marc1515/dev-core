import React from "react";
import { ObjectTypes } from "./_components/ObjectTypes";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";
import initTranslations from "@/app/i18n";
import { javascriptNamespaces } from "@/constants/translationNamespaces";

interface DataTypesProps {
  params: {
    locale: string;
  };
}

const DataTypes = async ({ params: { locale } }: DataTypesProps) => {
  const { t } = await initTranslations(locale, javascriptNamespaces);

  const mainT = (key: string) =>
    t(`syntax_and_basic_concepts.data_types.${key}`);

  return (
    <div>
      {/* Data Types */}
      <h1>{mainT("title")}</h1>
      <p>{mainT("description")}</p>

      <PrimitiveTypes />
      <ObjectTypes />
    </div>
  );
};

export default DataTypes;
