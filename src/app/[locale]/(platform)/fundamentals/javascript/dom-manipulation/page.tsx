import React from "react";
import initTranslations from "@/app/i18n";
import { domManipulationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { DomManipulationTypes } from "./types";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CardsWrapper } from "../../../_components/CardsWrapper";

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

export default DOMManipulationPage;
