import initTranslations from "@/app/i18n";

import { methodsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { MethodsTypes } from "@/types/methods";

import { methodCode } from "@/codes/methods";

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

interface MethodsPageProps {
  params: {
    locale: string;
  };
}

const MethodsPage = async ({ params: { locale } }: MethodsPageProps) => {
  const { t } = await initTranslations(locale, methodsNamespaces);
  const data: MethodsTypes["data"] = t("data", { returnObjects: true });

  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Code */}
      <CodeComponent codeToCopy={methodCode} />
      {/* Key Differncies */}
      <BasicBoxWrapper>
        <SecondaryTitle>{data.key_differences.title}</SecondaryTitle>
        <ListWrapper>
          <List>
            {data.key_differences.items.map((item, idx) => (
              <ItemList key={idx}>
                <ItemListTitle>{item.title}</ItemListTitle>
                <ItemListDescription>{item.description}</ItemListDescription>
              </ItemList>
            ))}
          </List>
        </ListWrapper>
      </BasicBoxWrapper>
      {/* Conclusion */}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default MethodsPage;
