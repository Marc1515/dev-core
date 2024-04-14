import React from "react";
import initTranslations from "@/app/i18n";
import {
  commonNamespaces,
  javascriptNamespaces,
} from "@/constants/translationNamespaces";
import Link from "next/link";

interface JavaScriptPageProps {
  params: {
    locale: string;
  };
}

const JavaScriptPage = async ({ params: { locale } }: JavaScriptPageProps) => {
  const { t: commonT } = await initTranslations(locale, commonNamespaces);
  const { t: mainT } = await initTranslations(locale, javascriptNamespaces);
  return (
    <>
      <h1>JavaScript</h1>
      <p>{mainT("javascript_definition")}</p>
      <p>{mainT("difference_between_var_and_dt")}</p>
      <Link href={"./javascript/variables"}>
        <span>Variables</span>
      </Link>
      <p>{mainT("variable_description")}</p>
      <Link href={"./javascript/datatypes"}>
        <span>{commonT("datatype_title")}</span>
      </Link>
      <p>{mainT("dataType_description")}</p>
      <Link href={"./javascript/operators"}>
        <span>{commonT("operator_title")}</span>
      </Link>
      <p>{mainT("operator_description")}</p>
      <Link href={"./javascript/controlstructures"}>
        <span>{commonT("control_structures_title")}</span>
      </Link>
      <p>{mainT("control_strucutres_description")}</p>
      <Link href={"./javascript/functions"}>
        <span>{commonT("functions_title")}</span>
      </Link>
      <p>{mainT("functions_description")}</p>
      <Link href={"./javascript/methods"}>
        <span>{commonT("methods_title")}</span>
      </Link>
      <p>{mainT("methods_description")}</p>
      <Link href={"./javascript/stringsmanipulation"}>
        <span>{commonT("strings_manipulation_title")}</span>
      </Link>
      <p>{mainT("strings_manipulation_description")}</p>
      <Link href={"./javascript/arraysmanipulation"}>
        <span>{commonT("arrays_manipulation_title")}</span>
      </Link>
      <p>{mainT("arrays_manipulation_description")}</p>
    </>
  );
};

export default JavaScriptPage;
