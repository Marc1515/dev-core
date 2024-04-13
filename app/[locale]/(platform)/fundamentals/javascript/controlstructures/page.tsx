import React from "react";
import initTranslations from "@/app/i18n";
import {
  commonNamespaces,
  controlStructuresNamespaces,
} from "@/constants/translationNamespaces";
import { Conditional } from "./_components/Conditional";

interface ControlStructuresProps {
  params: {
    locale: string;
  };
}

const ControlStructures = async ({
  params: { locale },
}: ControlStructuresProps) => {
  const { t: commonT } = await initTranslations(locale, commonNamespaces);
  const { t: mainT } = await initTranslations(
    locale,
    controlStructuresNamespaces
  );

  return (
    <div>
      <h1>{commonT("control_structures_title")}</h1>
      <p>{mainT("control_structures_description")}</p>
      <span>{mainT("control_structures_main_function_title")}</span>
      <p>{mainT("control_structures_main_function_explanation")}</p>
      <span>{mainT("control_structures_importance_title")}</span>
      <ul>
        <li>
          <p>{mainT("control_structures_importance_explanation_dd")}</p>
        </li>
        <li>
          <p>{mainT("control_structures_importance_explanation_e")}</p>
        </li>
        <li>
          <p>{mainT("control_structures_importance_explanation_fc")}</p>
        </li>
      </ul>

      <div>
        <span>{mainT("sequential_structures_title")}</span>
        <p>{mainT("sequential_structures_explanation")}</p>
        <span>{mainT("conditional_structures_title")}</span>
        <p>{mainT("conditional_structures_explanation")}</p>
        <Conditional />
        <span>{mainT("repetition_structures_title")}</span>
        <p>{mainT("repetition_structures_explanation")}</p>
      </div>
    </div>
  );
};

export default ControlStructures;
