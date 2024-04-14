import React from "react";
import initTranslations from "@/app/i18n";
import {
  commonNamespaces,
  stringsManipulationNamespaces,
} from "@/constants/translationNamespaces";
import { CharactersAccess } from "./_components/CharactersAccess";
import { Concatenation } from "./_components/Concatenation";
import { SearchAndReplace } from "./_components/SearchAndReplace";
import { SliceAndExtract } from "./_components/SliceAndExtract";
import { Transformation } from "./_components/Transformation";

interface StringsManipulationPageProps {
  params: {
    locale: string;
  };
}

const StringsManipulationPage = async ({
  params: { locale },
}: StringsManipulationPageProps) => {
  const { t: commonT } = await initTranslations(locale, commonNamespaces);
  const { t: mainT } = await initTranslations(
    locale,
    stringsManipulationNamespaces
  );

  return (
    <div>
      <h1>{commonT("strings_manipulation_title")}</h1>
      <p>{mainT("strings_manipulation_introduction")}</p>
      <CharactersAccess />
      <Concatenation />
      <SearchAndReplace />
      <SliceAndExtract />
      <Transformation />
    </div>
  );
};

export default StringsManipulationPage;
