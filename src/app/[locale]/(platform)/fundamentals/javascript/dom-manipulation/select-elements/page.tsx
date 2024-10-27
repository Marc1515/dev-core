import initTranslations from "@/app/i18n";

import { selectElementsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { SelectElementsTypes } from "@/types/select-elements";

import { codes } from "@/codes/arrays-manipulation";

/* Wrappers */
import { BasicBoxWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
import { CodeComponent } from "@/components/CodeComponent";

interface SelectElementsPageProps {
  params: {
    locale: string;
  };
}

const SelectElementsPage = async ({
  params: { locale },
}: SelectElementsPageProps) => {
  const { t } = await initTranslations(locale, selectElementsNamespaces);
  const data: SelectElementsTypes["data"] = t("data", { returnObjects: true });
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Selector */}

      {data.items?.map((item, idx) => (
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

export default SelectElementsPage;
