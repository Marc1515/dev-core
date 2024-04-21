import React from "react";
import initTranslations from "@/app/i18n";
import { controlStructuresNamespaces } from "@/constants/translationNamespaces";
import { ConditionalStructures } from "./_components/ConditionalsStructures";
import { RepetitionStructures } from "./_components/RepetitionStructures";

interface ControlStructuresProps {
  params: {
    locale: string;
  };
}

interface DescriptionItem {
  description: string;
}

const ControlStructures = async ({
  params: { locale },
}: ControlStructuresProps) => {
  const { t } = await initTranslations(locale, controlStructuresNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    /* Control Structures */
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span>{data.main_function.title}</span>
      <p>{data.main_function.description}</p>
      <span>{data.importance.title}</span>
      <ul>
        {data.importance.items.map((item: DescriptionItem) => (
          <li key={item.description}>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <div>
        {/* Sequential Structures */}
        <span>{data.sequential_structures.title}</span>
        <p>{data.sequential_structures.description}</p>
        {/* Conditional Structures */}
        <ConditionalStructures data={data.conditional_structures} />
        {/* Repetiotion Structures */}
        <RepetitionStructures data={data.repetition_structures} />
      </div>
    </div>
  );
};

export default ControlStructures;
