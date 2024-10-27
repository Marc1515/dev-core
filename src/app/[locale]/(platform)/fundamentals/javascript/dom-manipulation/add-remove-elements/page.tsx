import initTranslations from "@/app/i18n";

import { addRemoveElementsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { AddRemoveElementsTypes } from "@/types/add-remove-elements";

import { codes } from "@/codes/add-remove-elements";

/* Wrappers */
import { BasicBoxWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
import { CodeComponent } from "@/components/CodeComponent";

interface AddRemoveElementsPageProps {
  params: {
    locale: string;
  };
}

const AddRemoveElementsPage = async ({
  params: { locale },
}: AddRemoveElementsPageProps) => {
  const { t } = await initTranslations(locale, addRemoveElementsNamespaces);
  const data: AddRemoveElementsTypes["data"] = t("data", {
    returnObjects: true,
  });
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Modification */}

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

export default AddRemoveElementsPage;
