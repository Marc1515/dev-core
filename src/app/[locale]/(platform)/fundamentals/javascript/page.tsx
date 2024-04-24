import React from "react";

import initTranslations from "@/app/i18n";
import { javascriptNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { JavascriptTypes } from "./types";
import Link from "next/link";

interface JavaScriptPageProps {
  params: {
    locale: string;
  };
}

const JavaScriptPage = async ({ params: { locale } }: JavaScriptPageProps) => {
  const { t } = await initTranslations(locale, javascriptNamespaces);
  const data = t("data", {
    returnObjects: true,
  }) as JavascriptTypes["data"];
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

export default JavaScriptPage;
