import React from "react";

import initTranslations from "@/app/i18n";
import { html5Namespaces } from "@/constants/namespaces/html5Namespaces";
import { Html5Types } from "./types";
import Link from "next/link";

/* Wrappers */
import { CardsWrapper } from "../../_components/Wrappers";
/* Titles */
import { IntroTitle } from "../../_components/Titles";
/* Paragraphs */
import { BasicDescription } from "../../_components/Paragraphs";

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

const Html5Page = async ({ params: { locale } }: JavaScriptPageProps) => {
  const { t } = await initTranslations(locale, html5Namespaces);
  const data = t("data", {
    returnObjects: true,
  }) as Html5Types["data"];
  return (
    <>
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>

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

export default Html5Page;
