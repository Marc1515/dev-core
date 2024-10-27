import initTranslations from "@/app/i18n";

import { stylesModificationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { StylesModificationTypes } from "@/types/styles-modification";

import { codes } from "@/codes/styles-modification";

/* Wrappers */
import { BasicBoxWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
import { CodeComponent } from "@/components/CodeComponent";

interface StylesModificationPageProps {
  params: {
    locale: string;
  };
}

const StylesModificationPage = async ({
  params: { locale },
}: StylesModificationPageProps) => {
  const { t } = await initTranslations(locale, stylesModificationNamespaces);
  const data: StylesModificationTypes["data"] = t("data", {
    returnObjects: true,
  });
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Style Modification */}

      {data.modifications.map((modification, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{modification.title}</SecondaryTitle>
          <BasicDescription>{modification.description}</BasicDescription>
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

export default StylesModificationPage;
