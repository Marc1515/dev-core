import initTranslations from "@/app/i18n";

import { functionsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { FunctionsTypes } from "@/types/functions";

import { codes } from "@/codes/functions";

/* Wrappers */
import { BasicBoxWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
import { CodeComponent } from "@/components/CodeComponent";

interface FunctionPageProps {
  params: {
    locale: string;
  };
}

const FunctionsPage = async ({ params: { locale } }: FunctionPageProps) => {
  const { t } = await initTranslations(locale, functionsNamespaces);
  const data: FunctionsTypes["data"] = t("data", { returnObjects: true });

  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Function */}

      {data.items.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <BasicDescription>{item.description}</BasicDescription>
          <CodeComponent codeToCopy={codes} idx={idx} />
        </BasicBoxWrapper>
      ))}

      {/* Conclusion */}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default FunctionsPage;
