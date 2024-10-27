import initTranslations from "@/app/i18n";

import { jsonApisNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { JSONApisTypes } from "@/types/json-apis";

import { codes } from "@/codes/json-apis";

/* Wrappers */
import { BasicBoxWrapper, ListWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle, SubTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
/* Lists */
import { ItemList, List } from "@/components/Lists";
import { CodeComponent } from "@/components/CodeComponent";

interface JSONApisPageProps {
  params: {
    locale: string;
  };
}

const JSONApisPage = async ({ params: { locale } }: JSONApisPageProps) => {
  const { t } = await initTranslations(locale, jsonApisNamespaces);
  const data: JSONApisTypes["data"] = t("data", {
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
          <BasicDescription>{item.description}</BasicDescription>

          <ListWrapper>
            <List>
              {item.items?.map((item, idx) => (
                <ItemList key={idx}>
                  <SubTitle>{item.title}</SubTitle>
                  <BasicDescription>{item.description}</BasicDescription>
                </ItemList>
              ))}
            </List>
          </ListWrapper>
          {/* Code */}
          {codes[idx] !== "" ? (
            <CodeComponent codeToCopy={codes} idx={idx} />
          ) : null}
        </BasicBoxWrapper>
      ))}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default JSONApisPage;
