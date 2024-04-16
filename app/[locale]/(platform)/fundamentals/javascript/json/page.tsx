import React from "react";
import initTranslations from "@/app/i18n";
import { jsonNamespaces } from "@/constants/translationNamespaces";
import Link from "next/link";

interface JSONPageProps {
  params: {
    locale: string;
  };
}

const JSONPage = async ({ params: { locale } }: JSONPageProps) => {
  const { t: mainT } = await initTranslations(locale, jsonNamespaces);

  return (
    <div>
      <h1>JSON</h1>
      <p>{mainT("description")}</p>
      <Link href={"./json/json-syntax"}>
        <span>{mainT("json_syntax.title")}</span>
      </Link>
    </div>
  );
};

export default JSONPage;
