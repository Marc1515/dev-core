import React, { Fragment } from "react";

import initTranslations from "@/app/i18n";

import { dataTypesNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { DataTypesTypes } from "@/types/dataTypes";

/* Wrappers */
import { BasicBoxWrapper, ListWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
/* Lists */
import {
  List,
  ItemList,
  ItemListTitle,
  ItemListDescription,
} from "@/components/Lists";

interface DataTypesProps {
  params: {
    locale: string;
  };
}

const DataTypesPage = async ({ params: { locale } }: DataTypesProps) => {
  const { t } = await initTranslations(locale, dataTypesNamespaces);
  const data: DataTypesTypes["data"] = t("data", { returnObjects: true });

  return (
    /* Data Types */
    <div>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Data Type */}
      <>
        {data.types.map((item, idx) => (
          <BasicBoxWrapper key={idx}>
            {/* List Introduction */}
            <SecondaryTitle>{item.title}</SecondaryTitle>
            <BasicDescription>{item.description}</BasicDescription>
            {/* Each Item */}
            <ListWrapper>
              <List>
                {item.items.map((item, idx) => (
                  <Fragment key={idx}>
                    <ItemList>
                      <ItemListTitle>{item.title}: </ItemListTitle>
                      <ItemListDescription>
                        {item.description}
                      </ItemListDescription>
                    </ItemList>
                  </Fragment>
                ))}
              </List>
            </ListWrapper>
          </BasicBoxWrapper>
        ))}
        <BasicBoxWrapper>
          <Conclusion>{data.conclusion}</Conclusion>
        </BasicBoxWrapper>
      </>
    </div>
  );
};

export default DataTypesPage;
