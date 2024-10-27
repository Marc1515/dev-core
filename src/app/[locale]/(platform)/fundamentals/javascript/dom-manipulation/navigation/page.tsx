import initTranslations from "@/app/i18n";

import { navigationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { NavigationTypes } from "@/types/navigation";

import { codes } from "@/codes/navigation";

/* Wrappers */
import { BasicBoxWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
import { CodeComponent } from "@/components/CodeComponent";

interface NavigationPageProps {
  params: {
    locale: string;
  };
}

const NavigationPage = async ({ params: { locale } }: NavigationPageProps) => {
  const { t } = await initTranslations(locale, navigationNamespaces);
  const data: NavigationTypes["data"] = t("data", { returnObjects: true });
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Type of Navigation */}

      {data.items.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <BasicDescription>{item.description}</BasicDescription>
          {/* Code */}
          <CodeComponent codeToCopy={codes} idx={idx} />
        </BasicBoxWrapper>
      ))}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default NavigationPage;
