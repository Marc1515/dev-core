import React from "react";
import initTranslations from "@/app/i18n";
import { dataTypesNamespaces } from "@/constants/translationNamespaces";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";
import { ObjectTypes } from "./_components/ObjectTypes";

interface DataTypesProps {
  params: {
    locale: string;
  };
}

const DataTypes = async ({ params: { locale } }: DataTypesProps) => {
  const { t } = await initTranslations(locale, dataTypesNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    /* Data Types */
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <PrimitiveTypes data={data.primitive_types} />
      {<ObjectTypes data={data.object_types} />}
    </div>
  );
};

export default DataTypes;
