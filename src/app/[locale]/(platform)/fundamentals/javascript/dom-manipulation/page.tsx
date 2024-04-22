import React from "react";
import initTranslations from "@/app/i18n";
import { domManipulationNamespaces } from "@/constants/translationNamespaces";
import { DomManipulationTypes } from "./types";
import Link from "next/link";

interface DOMManipulationPageProps {
  params: {
    locale: string;
  };
}

const DOMManipulationPage = async ({
  params: { locale },
}: DOMManipulationPageProps) => {
  const { t } = await initTranslations(locale, domManipulationNamespaces);
  const data = t("data", {
    returnObjects: true,
  }) as DomManipulationTypes["data"];

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

export default DOMManipulationPage;
