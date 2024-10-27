import initTranslations from "@/app/i18n";

import { arraysManipulationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { ArraysManipulationTypes } from "@/types/arrays-manipulation";

import { codes } from "@/codes/arrays-manipulation";

/* Wrappers */
import { BasicBoxWrapper, ListWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
/* Lists */
import { ItemList, ItemListDescription, List } from "@/components/Lists";
import { CodeComponent } from "@/components/CodeComponent";

interface ArraysManipulationPageProps {
  params: {
    locale: string;
  };
}

const ArraysManipulationPage = async ({
  params: { locale },
}: ArraysManipulationPageProps) => {
  const { t } = await initTranslations(locale, arraysManipulationNamespaces);
  const data: ArraysManipulationTypes["data"] = t("data", {
    returnObjects: true,
  });

  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Manipulation Type */}

      {data.manipulation.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <ListWrapper>
            <List>
              {!item.description ? (
                item.items?.map((item, idx) => (
                  <ItemList key={idx}>
                    <ItemListDescription>
                      {item.description}
                    </ItemListDescription>
                  </ItemList>
                ))
              ) : (
                <BasicDescription>{item.description}</BasicDescription>
              )}
            </List>
          </ListWrapper>
          <CodeComponent codeToCopy={codes} idx={idx} />
        </BasicBoxWrapper>
      ))}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default ArraysManipulationPage;
