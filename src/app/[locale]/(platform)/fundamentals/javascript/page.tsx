import React from "react";

import initTranslations from "@/app/i18n";
import { javascriptNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { JavascriptTypes } from "./types";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="w-full h-full p-5 bg-green-400">
      <div className="pb-10">
        <h1 className="text-3xl font-bold pb-5">{data.title}</h1>
        <p>{data.description}</p>
      </div>

      <div className="w-full h-full flex flex-col gap-x-10 justify-evenly items-center">
        {data.items.map((item, idx) => (
          <Link href={item.path} key={idx}>
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

export default JavaScriptPage;
