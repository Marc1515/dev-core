import React from "react";

import initTranslations from "@/app/i18n";
import { stylesModificationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { StylesModification } from "./_components/StylesModification";

interface StylesModificationPageProps {
  params: {
    locale: string;
  };
}

const StylesModificationPage = async ({
  params: { locale },
}: StylesModificationPageProps) => {
  const { t } = await initTranslations(locale, stylesModificationNamespaces);
  const data = t("data", { returnObjects: true });
  return (
    <div>
      <StylesModification data={data} />
    </div>
  );
};

export default StylesModificationPage;
