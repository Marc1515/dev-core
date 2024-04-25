import React from "react";
import initTranslations from "@/app/i18n";
import { syntaxAndBasicConceptsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import Link from "next/link";
import { SyntaxAndBasicConceptsTypes } from "./types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <div className="w-full h-full flex flex-wrap gap-x-10 justify-evenly items-center">
        {data.items.map((item, idx) => (
          <Link className="w-1/4" href={item.path} key={idx}>
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SyntaxAndBasicConceptsPage;
