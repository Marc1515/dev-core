import React from "react";
import initTranslations from "@/app/i18n";
import { variablesNamespaces } from "@/constants/translationNamespaces";

interface VariablesProps {
  params: {
    locale: string;
  };
}

const Variables = async ({ params: { locale } }: VariablesProps) => {
  const { t: mainT } = await initTranslations(locale, variablesNamespaces);

  return (
    <div>
      <h1>Variables</h1>
      <span>{mainT("var_main_function_title")}</span>
      <p>{mainT("var_main_function_explanation")}</p>
      <span>{mainT("var_importance_title")}</span>
      <ol>
        <li>
          <p>{mainT("var_importance_explanation_or")}</p>
        </li>
        <li>
          <p>{mainT("var_importance_explanation_cr")}</p>
        </li>
        <li>
          <p>{mainT("var_importance_explanation_dm")}</p>
        </li>
      </ol>
    </div>
  );
};

export default Variables;
