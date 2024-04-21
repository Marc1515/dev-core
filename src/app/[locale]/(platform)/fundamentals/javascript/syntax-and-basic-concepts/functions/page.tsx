import React from "react";
import FunctionsDeclarations from "./_components/FunctionsDeclarations";
import FunctionsExpressions from "./_components/FunctionsExpression";
import ArrowFunctions from "./_components/ArrowFunctions";
import ConstructorFunctions from "./_components/ConstructorFunctions";
import GeneratorFunctions from "./_components/GeneratorFunctions";
import AsyncFunctions from "./_components/AsyncFunctions";
import Closures from "./_components/Closures";
import Callbacks from "./_components/Callbacks";
import initTranslations from "@/app/i18n";
import { functionsNamespaces } from "@/constants/translationNamespaces";
import { Functions } from "./_components/Functions";

interface FunctionPageProps {
  params: {
    locale: string;
  };
}

const FunctionsPage = async ({ params: { locale } }: FunctionPageProps) => {
  const { t } = await initTranslations(locale, functionsNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <h1>{t("functions_name")}</h1>
      <p>{t("functions_introduction")}</p>
      <Functions data={data} />
      {/*       <FunctionsDeclarations />
      <FunctionsExpressions />
      <ArrowFunctions />
      <ConstructorFunctions />
      <GeneratorFunctions />
      <AsyncFunctions />
      <Closures />
      <Callbacks /> */}
      <p>{t("functions_conclusion")}</p>
    </div>
  );
};

export default FunctionsPage;
