import initTranslations from "@/app/i18n";

import { stringsManipulationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { StringsManipulationTypes } from "@/types/strings-manipulation";

import { codes } from "@/codes/strings-manipulation";

/* Wrappers */
import { BasicBoxWrapper, ListWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
/* Lists */
import { ItemList, ItemListDescription, List } from "@/components/Lists";
import { CodeComponent } from "@/components/CodeComponent";

interface StringsManipulationPageProps {
  params: {
    locale: string;
  };
}

const StringsManipulationPage = async ({
  params: { locale },
}: StringsManipulationPageProps) => {
  const { t } = await initTranslations(locale, stringsManipulationNamespaces);
  const data: StringsManipulationTypes["data"] = t("data", {
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

export default StringsManipulationPage;
