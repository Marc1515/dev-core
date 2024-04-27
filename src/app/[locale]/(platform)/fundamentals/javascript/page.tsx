import React from "react";

import initTranslations from "@/app/i18n";
import { javascriptNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { JavascriptTypes } from "./types";
import Link from "next/link";

import { IntroWrapper } from "../../_components/IntroWrapper";
import { IntroTitle } from "../../_components/IntroWrapper/_components/IntroTitle";
import { IntroDescription } from "../../_components/IntroWrapper/_components/IntroDescription";
import { CardsWrapper } from "../../_components/CardsWrapper";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <>
      <IntroWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <IntroDescription>{data.description}</IntroDescription>
      </IntroWrapper>

      <Accordion type="single" collapsible>
        <CardsWrapper>
          {data.items.map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <Link href={item.path}>
                  <CardTitle>{item.title}</CardTitle>
                </Link>
              </CardHeader>
              <CardContent>
                <AccordionItem value={item.title}>
                  <AccordionTrigger>read me...</AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
          ))}
        </CardsWrapper>
      </Accordion>
    </>
  );
};

export default JavaScriptPage;
