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
      <p>{commonT("javascript_definition")}</p>

      <Link href={"./javascript/syntax-and-basic-concepts"}>
        <span>{commonT("syntax_and_basic_concepts_title")}</span>
      </Link>
      <p>{commonT("syntax_and_basic_concepts_definition")}</p>
      <Link href={"./javascript/dom-manipulation"}>
        <span>{commonT("dom_manipulation_title")}</span>
      </Link>
      <p>{commonT("dom_manipulation_definition")}</p>
      <Link href={"./javascript/json"}>
        <span>JSON</span>
      </Link>
      <p>{commonT("json_definition")}</p>
    </>
  );
};

export default JavaScriptPage;
