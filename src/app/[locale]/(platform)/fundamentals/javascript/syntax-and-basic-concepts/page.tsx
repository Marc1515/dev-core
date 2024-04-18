import React from "react";
import initTranslations from "@/app/i18n";
import {
  commonNamespaces,
  javascriptNamespaces,
} from "@/constants/translationNamespaces";
import Link from "next/link";

interface SyntaxAndBasicConceptsPageProps {
  params: {
    locale: string;
  };
}

const SyntaxAndBasicConceptsPage = async ({
  params: { locale },
}: SyntaxAndBasicConceptsPageProps) => {
  const { t: commonT } = await initTranslations(locale, commonNamespaces);
  const { t: mainT } = await initTranslations(locale, javascriptNamespaces);

  return (
    <>
      <h1>Syntax and Basic Concepts</h1>

      <p>{mainT("difference_between_var_and_dt")}</p>
      <Link href={"./syntax-and-basic-concepts/variables"}>
        <span>Variables</span>
      </Link>
      <p>{mainT("variable_description")}</p>
      <Link href={"./syntax-and-basic-concepts/datatypes"}>
        <span>{commonT("datatype_title")}</span>
      </Link>
      <p>{mainT("dataType_description")}</p>
      <Link href={"./syntax-and-basic-concepts/operators"}>
        <span>{commonT("operator_title")}</span>
      </Link>
      <p>{mainT("operator_description")}</p>
      <Link href={"./syntax-and-basic-concepts/controlstructures"}>
        <span>{commonT("control_structures_title")}</span>
      </Link>
      <p>{mainT("control_strucutres_description")}</p>
      <Link href={"./syntax-and-basic-concepts/functions"}>
        <span>{commonT("functions_title")}</span>
      </Link>
      <p>{mainT("functions_description")}</p>
      <Link href={"./syntax-and-basic-concepts/methods"}>
        <span>{commonT("methods_title")}</span>
      </Link>
      <p>{mainT("methods_description")}</p>
      <Link href={"./syntax-and-basic-concepts/stringsmanipulation"}>
        <span>{commonT("strings_manipulation_title")}</span>
      </Link>
      <p>{mainT("strings_manipulation_description")}</p>
      <Link href={"./syntax-and-basic-concepts/arraysmanipulation"}>
        <span>{commonT("arrays_manipulation_title")}</span>
      </Link>
      <p>{mainT("arrays_manipulation_description")}</p>
    </>
  );
};

export default SyntaxAndBasicConceptsPage;
