import React from "react";
import initTranslations from "@/app/i18n";
import { operatorsNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { OperatorsTypes } from "@/types/operators";
/* Wrappers */
import { BasicBoxWrapper, ListWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
/* List */
import {
  List,
  ItemList,
  ItemListTitle,
  ItemListDescription,
} from "@/components/Lists";

interface OperatorsProps {
  params: {
    locale: string;
  };
}

const OperatorsPage = async ({ params: { locale } }: OperatorsProps) => {
  const { t } = await initTranslations(locale, operatorsNamespaces);
  const data: OperatorsTypes["data"] = t("data", { returnObjects: true });

  return (
    /* Operators */
    <div>
      {/* Introduction */}
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
        <SecondaryTitle>{data.importance.title}</SecondaryTitle>
        <ListWrapper>
          <List>
            {data.importance.items.map((item, index) => (
              <ItemList key={index}>
                <ItemListTitle>{item.title}</ItemListTitle>
                <ItemListDescription>{item.description}</ItemListDescription>
              </ItemList>
            ))}
          </List>
        </ListWrapper>
      </BasicBoxWrapper>
      {/* Additional Concepts */}
      <BasicBoxWrapper>
        <SecondaryTitle>{data.additional_concepts.title}</SecondaryTitle>
        <ListWrapper>
          <List>
            {data.importance.items.map((item, index) => (
              <ItemList key={index}>
                <ItemListTitle>{item.title}</ItemListTitle>
                <ItemListDescription>{item.description}</ItemListDescription>
              </ItemList>
            ))}
          </List>
        </ListWrapper>
      </BasicBoxWrapper>
      {/* All Operators */}
      <>
        {data.operators.map((operator, index) => (
          <BasicBoxWrapper key={index}>
            <SecondaryTitle>{operator.title}</SecondaryTitle>
            <BasicDescription>{operator.description}</BasicDescription>
            {/* Each Operator */}
            <ListWrapper>
              <List>
                {operator.items?.map((item, index) => (
                  <ItemList key={index}>
                    <ItemListTitle>
                      {item.title} ({item.symbol}):
                    </ItemListTitle>
                    <ItemListDescription>
                      {item.description}
                    </ItemListDescription>
                  </ItemList>
                ))}
              </List>
            </ListWrapper>
          </BasicBoxWrapper>
        ))}
      </>
      {/* Conclusion */}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </div>
  );
};

export default OperatorsPage;
