import initTranslations from "@/app/i18n";
import { variablesNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { VariablesTypes } from "@/types/variables";
/* Wrappers */
import {
  BasicBoxWrapper,
  ListWrapper,
} from "@/app/[locale]/(platform)/_components/Wrappers";
/* Titles */
import {
  IntroTitle,
  SecondaryTitle,
} from "@/app/[locale]/(platform)/_components/Titles";
/* Paragraphs */
import {
  BasicDescription,
  Conclusion,
} from "@/app/[locale]/(platform)/_components/Paragraphs";
/* Lists */
import {
  List,
  ItemList,
  ListTitle,
  ItemListTitle,
  ItemListDescription,
} from "@/app/[locale]/(platform)/_components/Lists";

interface VariablesProps {
  params: {
    locale: string;
  };
}

const VariablesPage = async ({ params: { locale } }: VariablesProps) => {
  const { t } = await initTranslations(locale, variablesNamespaces);
  const data: VariablesTypes["data"] = t("data", { returnObjects: true });

  return (
    <>
      {/* Variables */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>

      {/* Main Function */}
      <BasicBoxWrapper>
        <SecondaryTitle>{data.main_function.title}</SecondaryTitle>
        <BasicDescription>{data.main_function.description}</BasicDescription>
      </BasicBoxWrapper>

      {/* Importance */}
      <BasicBoxWrapper>
        <ListTitle>{data.importance.title}</ListTitle>
        <ListWrapper>
          <List>
            {data.importance.items.map((item, idx) => (
              <ItemList key={idx}>
                <ItemListTitle>{item.title}</ItemListTitle>
                <ItemListDescription>{item.description}</ItemListDescription>
              </ItemList>
            ))}
          </List>
        </ListWrapper>
      </BasicBoxWrapper>

      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default VariablesPage;
