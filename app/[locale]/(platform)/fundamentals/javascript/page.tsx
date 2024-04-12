import React from "react";
import initTranslations from "@/app/i18n";
import { javascriptTypesNamespaces } from "@/constants/translationNamespaces";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";
import { ObjectTypes } from "./_components/ObjectTypes";
import { ArithmeticOperators } from "./_components/ArithmeticOperators";
import { AssignmentOperators } from "./_components/AssignmentOperators";
import { ComparisionOperators } from "./_components/ComparisionOperators";
import { LogicalOperators } from "./_components/LogicalOperators";
import { StringOperator } from "./_components/StringOperator";

interface JavaScriptPageProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = javascriptTypesNamespaces.filter(
  (namespace) => namespace === javascriptTypesNamespaces[1]
);

const JavaScriptPage = async ({ params: { locale } }: JavaScriptPageProps) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <h1>JavaScript</h1>
      <p>{t("javascript_definition")}</p>
      <span>Data Types</span>
      <PrimitiveTypes />
      <ObjectTypes />
      <span>Operators</span>
      <ArithmeticOperators />
      <AssignmentOperators />
      <ComparisionOperators />
      <LogicalOperators />
      <StringOperator />
    </>
  );
};

export default JavaScriptPage;
