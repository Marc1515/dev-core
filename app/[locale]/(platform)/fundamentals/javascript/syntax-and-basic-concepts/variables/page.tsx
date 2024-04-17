import React from "react";
import initTranslations from "@/app/i18n";
import { javascriptNamespaces } from "@/constants/translationNamespaces";

interface VariablesProps {
  params: {
    locale: string;
  };
}

const Variables = async ({ params: { locale } }: VariablesProps) => {
  const { t } = await initTranslations(locale, javascriptNamespaces);

  const mainT = (key: string) =>
    t(`syntax_and_basic_concepts.variables.${key}`);

  return (
    <div>
      {/* Variables */}
      <h1>{mainT("title")}</h1>
      <p>{mainT("description")}</p>

      <span>{mainT("main_function.title")}</span>
      <p>{mainT("main_function.description")}</p>

      <span>{mainT("importance.title")}</span>
      <ol>
        <li>
          <p>{mainT("importance.point_one")}</p>
        </li>
        <li>
          <p>{mainT("importance.point_one")}</p>
        </li>
        <li>
          <p>{mainT("importance.point_one")}</p>
        </li>
      </ol>
    </div>
  );
};

export default Variables;
