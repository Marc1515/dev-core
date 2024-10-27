import initTranslations from "@/app/i18n";

import { jsonSyntaxNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { JSONSyntaxPageTypes } from "@/types/json-syntax";

import { codes } from "@/codes/json-syntax";

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

interface JSONSyntaxPageProps {
  params: {
    locale: string;
  };
}

const JSONSyntaxPage = async ({ params: { locale } }: JSONSyntaxPageProps) => {
  const { t } = await initTranslations(locale, jsonSyntaxNamespaces);
  const data: JSONSyntaxPageTypes["data"] = t("data", {
    returnObjects: true,
  });

  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>

      {/* Each Explanation */}

      {data.items.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <BasicDescription>{item.description}</BasicDescription>
          <ListWrapper>
            <List>
              {item.items?.map((item, idx) => (
                <ItemList key={idx}>
                  <ItemListTitle>{item.title}</ItemListTitle>
                  <ItemListDescription>{item.description}</ItemListDescription>
                </ItemList>
              ))}
            </List>
          </ListWrapper>
          {codes[idx] === "" ? null : (
            /* Code */
            <CodeComponent codeToCopy={codes} idx={idx} />
          )}
        </BasicBoxWrapper>
      ))}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default JSONSyntaxPage;
