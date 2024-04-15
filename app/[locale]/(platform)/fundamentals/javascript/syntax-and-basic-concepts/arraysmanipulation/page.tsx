import React from "react";
import initTranslations from "@/app/i18n";
import {
  commonNamespaces,
  arraysManipulationNamespaces,
} from "@/constants/translationNamespaces";
import { AddAndRemove } from "./_components/AddAndRemove";
import { IterOverArrays } from "./_components/IterOverArrays";
import { TransformArrays } from "./_components/TransformArrays";
import { SearchInArrays } from "./_components/SearchInArrays";
import { SortArrays } from "./_components/SortArrays";

interface ArraysManipulationPageProps {
  params: {
    locale: string;
  };
}

const ArraysManipulationPage = async ({
  params: { locale },
}: ArraysManipulationPageProps) => {
  const { t: commonT } = await initTranslations(locale, commonNamespaces);
  const { t: mainT } = await initTranslations(
    locale,
    arraysManipulationNamespaces
  );

  return (
    <div>
      <h1>{commonT("arrays_manipulation_title")}</h1>
      <p>{mainT("arrays_manipulation_introduction")}</p>
      <AddAndRemove />
      <IterOverArrays />
      <TransformArrays />
      <SearchInArrays />
      <SortArrays />
      <p>{mainT("arrays_manipulation_conclusion")}</p>
    </div>
  );
};

export default ArraysManipulationPage;
