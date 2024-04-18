import React from "react";
import initTranslations from "@/app/i18n";
import { dataTypesNamespaces } from "@/constants/translationNamespaces";
import { ObjectTypes } from "./_components/ObjectTypes";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";

interface DataTypesProps {
  params: {
    locale: string;
  };
}

const DataTypes = async ({ params: { locale } }: DataTypesProps) => {
  const { t } = await initTranslations(locale, dataTypesNamespaces);
  const { t: dataPrimitiveTypesT } = await initTranslations(
    locale,
    dataTypesNamespaces
  );
  const { t: dataObjectTypesT } = await initTranslations(
    locale,
    dataTypesNamespaces
  );

  const dataPrimitiveTypes = dataPrimitiveTypesT("primitive_types", {
    returnObjects: true,
  });

  const dataObjectTypes = dataObjectTypesT("object_types", {
    returnObjects: true,
  });

  return (
    /* Data Types */
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>

      {<PrimitiveTypes data={dataPrimitiveTypes} />}
      <ObjectTypes data={dataObjectTypes} />
    </div>
  );
};

export default DataTypes;
