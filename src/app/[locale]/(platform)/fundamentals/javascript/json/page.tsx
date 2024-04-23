import React from "react";
import initTranslations from "@/app/i18n";
import { JSONPageTypes } from "./types";
import { jsonNamespaces } from "@/constants/translationNamespaces";
import Link from "next/link";

interface JSONPageProps {
  params: {
    locale: string;
  };
}

const JSONPage = async ({ params: { locale } }: JSONPageProps) => {
  const { t } = await initTranslations(locale, jsonNamespaces);
  const data = t("data", {
    returnObjects: true,
  }) as JSONPageTypes["data"];

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

export default JSONPage;
