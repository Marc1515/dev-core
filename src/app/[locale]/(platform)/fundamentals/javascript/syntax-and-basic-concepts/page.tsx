import React from "react";
import initTranslations from "@/app/i18n";
import { syntaxAndBasicConceptsNamespaces } from "@/constants/translationNamespaces";
import Link from "next/link";
import { SyntaxAndBasicConceptsTypes } from "./types";

interface SyntaxAndBasicConceptsPageProps {
  params: {
    locale: string;
  };
}

const SyntaxAndBasicConceptsPage = async ({
  params: { locale },
}: SyntaxAndBasicConceptsPageProps) => {
  const { t } = await initTranslations(
    locale,
    syntaxAndBasicConceptsNamespaces
  );
  const data = t("data", {
    returnObjects: true,
  }) as SyntaxAndBasicConceptsTypes["data"];

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.items.map((item, idx) => (
          <li key={idx}>
            <span>
              <strong>
                <Link href={item.path}>{item.title}</Link>
              </strong>
            </span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SyntaxAndBasicConceptsPage;
