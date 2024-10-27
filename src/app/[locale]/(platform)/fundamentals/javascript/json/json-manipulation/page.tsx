import initTranslations from "@/app/i18n";

import { jsonManipulationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { JSONManipulationTypes } from "@/types/json-manipulation";

import { codes } from "@/codes/json-manipulation";

/* Wrappers */
import { BasicBoxWrapper, ListWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
/* Lists */
import {
  ItemList,
  ItemListDescription,
  ItemListTitle,
  List,
} from "@/components/Lists";
import { CodeComponent } from "@/components/CodeComponent";

interface JSONManipulationPageProps {
  params: {
    locale: string;
  };
}

const JSONManipulationPage = async ({
  params: { locale },
}: JSONManipulationPageProps) => {
  const { t } = await initTranslations(locale, jsonManipulationNamespaces);
  const data: JSONManipulationTypes["data"] = t("data", {
    returnObjects: true,
  });

  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>

      {data.items.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>

          <>
            <BasicDescription>{item.description}</BasicDescription>
            <ListWrapper>
              <List>
                {item.items?.map((item, idx) => (
                  <ItemList key={idx}>
                    <ItemListTitle>{item.title}</ItemListTitle>
                    <ItemListDescription>
                      {item.description}
                    </ItemListDescription>
                  </ItemList>
                ))}
              </List>
            </ListWrapper>
            {/* Code */}
            {item.id !== 1 ? (
              <CodeComponent codeToCopy={codes} idx={idx} />
            ) : null}
          </>
        </BasicBoxWrapper>
      ))}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default JSONManipulationPage;
