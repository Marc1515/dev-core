import initTranslations from "@/app/i18n";
import { syntaxAndBasicConceptsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import Link from "next/link";
import { SyntaxAndBasicConceptsTypes } from "@/types/syntax-and-basic-concepts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
/* Wrappers */
import { CardsWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription } from "@/components/Paragraphs";
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

  // Calcula el número de tarjetas
  const cardsNumber = data.items.length > 5 ? 8 : 3; // Usa 8 si hay más de 5 elementos, de lo contrario usa 3

  return (
    <>
      <IntroTitle>{data.title}</IntroTitle>
      <BasicDescription>{data.description}</BasicDescription>

      <CardsWrapper>
        {data.items.map((item, idx) => (
          <Card key={idx} cardsNumber={cardsNumber}>
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
