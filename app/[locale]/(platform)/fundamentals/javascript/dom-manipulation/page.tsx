import React from "react";
import initTranslations from "@/app/i18n";
import {
  commonNamespaces,
  domManipulationNamespaces,
} from "@/constants/translationNamespaces";
import { SelectDOMElements } from "./_components/SelectDOMElements";
import { ElementContentModification } from "./_components/ElementContentModification";
import { StyleChange } from "./_components/StyleChange";
import { AddOrRemoveElements } from "./_components/AddOrRemoveElements";
import { EventsHandle } from "./_components/EventsHandle";
import { DOMNavigation } from "./_components/DOMNavigation";

interface DOMManipulationPageProps {
  params: {
    locale: string;
  };
}

const DOMManipulationPage = async ({
  params: { locale },
}: DOMManipulationPageProps) => {
  const { t: commonT } = await initTranslations(locale, commonNamespaces);
  const { t: mainT } = await initTranslations(
    locale,
    domManipulationNamespaces
  );

  return (
    <div>
      <h1>{commonT("dom_manipulation_title")}</h1>
      <p>{commonT("dom_manipulation_definition")}</p>
      <h2>{mainT("domm_key_concepts_title")}</h2>
      <SelectDOMElements />
      <h2>{mainT("domm_basic_operations_in_the_dom_title")}</h2>
      <ElementContentModification />
      <StyleChange />
      <AddOrRemoveElements />
      <EventsHandle />
      <DOMNavigation />
    </div>
  );
};

export default DOMManipulationPage;
