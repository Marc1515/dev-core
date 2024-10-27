import initTranslations from "@/app/i18n";

import { JSONPageTypes } from "@/types/json";

import { jsonNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* Wrappers */
import { CardsWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/components/Paragraphs";

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
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
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
