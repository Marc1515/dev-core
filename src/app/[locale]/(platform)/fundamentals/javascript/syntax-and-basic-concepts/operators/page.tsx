import React from "react";
import initTranslations from "@/app/i18n";
import { operatorsNamespaces } from "@/constants/translationNamespaces";
import { ArithmeticOperators } from "./_components/ArithmeticOperators";
import { AssignmentOperators } from "./_components/AssignmentOperators";
import { ComparisionOperators } from "./_components/ComparasionOperators";
import { LogicalOperators } from "./_components/LogicalOperators";
import { StringOperator } from "./_components/StringOperator";
import { TernaryOperator } from "./_components/TernaryOperator";
import { TypeOperators } from "./_components/TypeOperators";

interface OperatorsProps {
  params: {
    locale: string;
  };
}

interface DescriptionItem {
  description: string;
}

const Operators = async ({ params: { locale } }: OperatorsProps) => {
  const { t } = await initTranslations(locale, operatorsNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    /* Operators */
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span>{data.main_function.title}</span>
      <p>{data.main_function.description}</p>
      <span>{data.importance.title}</span>
      <ol>
        {data.importance.items.map((item: DescriptionItem) => (
          <li key={item.description}>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
      <span>{data.additional_concepts.title}</span>
      <ol>
        {data.additional_concepts.items.map((item: DescriptionItem) => (
          <li key={item.description}>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>

      <ArithmeticOperators data={data.arithmetic} />
      <AssignmentOperators data={data.assignment} />
      <ComparisionOperators data={data.comparation} />
      <LogicalOperators data={data.logical} />
      <StringOperator data={data.string} />
      <TernaryOperator data={data.ternary} />
      <TypeOperators data={data.type} />

      <p>{data.conclusion}</p>
    </div>
  );
};

export default Operators;
