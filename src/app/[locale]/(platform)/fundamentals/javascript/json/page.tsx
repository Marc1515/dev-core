import React from "react";
import initTranslations from "@/app/i18n";
import { JSONPageTypes } from "./types";
import { jsonNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CardsWrapper } from "../../../_components/CardsWrapper";

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
    <>
      <div className="pb-10">
        <h1 className="text-3xl font-bold pb-5">{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <CardsWrapper>
        {data.items.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <Link href={item.path}>
                <CardTitle>{item.title}</CardTitle>
              </Link>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>read me...</AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </>
  );
};

export default JSONPage;
