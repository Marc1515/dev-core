import React from "react";
import { ArithmeticOperators } from "./_components/ArithmeticOperators";
import { AssignmentOperators } from "./_components/AssignmentOperators";
import { ComparisionOperators } from "./_components/ComparisionOperators";
import { LogicalOperators } from "./_components/LogicalOperators";
import { StringOperator } from "./_components/StringOperator";
import initTranslations from "@/app/i18n";
import {
  commonNamespaces,
  operatorsNamespaces,
} from "@/constants/translationNamespaces";
import { ConditionalOperators } from "./_components/ConditionalOperator";
import { TypeOperators } from "./_components/TypeOperators";

interface OperatorsProps {
  params: {
    locale: string;
  };
}

const Operators = async ({ params: { locale } }: OperatorsProps) => {
  const { t: commonT } = await initTranslations(locale, commonNamespaces);
  const { t: mainT } = await initTranslations(locale, operatorsNamespaces);

  return (
    <div>
      <h1>{commonT("operator_title")}</h1>
      <span>{mainT("operators_main_function_title")}</span>
      <p>{mainT("operators_main_function_explanation")}</p>
      <span>{mainT("operators_importance_title")}</span>
      <ol>
        <li>
          <p>{mainT("operators_importance_explanation_ec")}</p>
        </li>
        <li>
          <p>{mainT("operators_importance_explanation_cpf")}</p>
        </li>
        <li>
          <p>{mainT("operators_importance_explanation_dm")}</p>
        </li>
      </ol>
      <span>{mainT("operators_additional_concepts_title")}</span>
      <ol>
        <li>
          <p>{mainT("operators_additional_concepts_explanation_op")}</p>
        </li>
        <li>
          <p>{mainT("operators_additional_concepts_explanation_oa")}</p>
        </li>
        <li>
          <p>{mainT("operators_additional_concepts_explanation_se")}</p>
        </li>
      </ol>

      <ArithmeticOperators />
      <AssignmentOperators />
      <ComparisionOperators />
      <LogicalOperators />
      <StringOperator />
      <ConditionalOperators />
      <TypeOperators />

      <p>{mainT("operators_conclusion")}</p>
    </div>
  );
};

export default Operators;
