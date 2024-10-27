import initTranslations from "@/app/i18n";

import { elementContentModificationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { ElementContentModificationTypes } from "@/types/elements-content-manipulation";

import { codes } from "@/codes/elements-content-manipulation";

/* Wrappers */
import { BasicBoxWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
import { CodeComponent } from "@/components/CodeComponent";

interface ElementsContentModificationPageProps {
  params: {
    locale: string;
  };
}

const ElementsContentModificationPage = async ({
  params: { locale },
}: ElementsContentModificationPageProps) => {
  const { t } = await initTranslations(
    locale,
    elementContentModificationNamespaces
  );
  const data: ElementContentModificationTypes["data"] = t("data", {
    returnObjects: true,
  });
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Content Modification */}

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

export default ElementsContentModificationPage;
