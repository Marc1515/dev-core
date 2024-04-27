import React from "react";
import initTranslations from "@/app/i18n";
import { syntaxAndBasicConceptsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import Link from "next/link";
import { SyntaxAndBasicConceptsTypes } from "./types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IntroWrapper } from "../../../_components/IntroWrapper";
import { IntroTitle } from "../../../_components/IntroWrapper/_components/IntroTitle";
import { IntroDescription } from "../../../_components/IntroWrapper/_components/IntroDescription";
import { CardsWrapper } from "../../../_components/CardsWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <>
      <IntroWrapper>
        <IntroTitle>{data.title}</IntroTitle>
        <IntroDescription>{data.description}</IntroDescription>
      </IntroWrapper>

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

export default SyntaxAndBasicConceptsPage;
