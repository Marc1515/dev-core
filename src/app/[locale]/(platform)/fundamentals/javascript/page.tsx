import initTranslations from "@/app/i18n";

import { javascriptNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { JavascriptTypes } from "@/types/javascript";

import Link from "next/link";

/* Wrappers */
import { CardsWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/components/Paragraphs";

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
    <div className="p-1 md:px-10 w-full h-full">
      <IntroTitle>{data.title}</IntroTitle>
      <BasicDescription>{data.description}</BasicDescription>

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
    </div>
  );
};

export default JavaScriptPage;
