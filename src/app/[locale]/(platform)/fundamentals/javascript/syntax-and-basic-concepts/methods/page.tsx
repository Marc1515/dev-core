import React from "react";
import initTranslations from "@/app/i18n";
import { methodsNamespaces } from "@/constants/translationNamespaces";
import { Methods } from "./_components/Methods";

interface MethodsPageProps {
  params: {
    locale: string;
  };
}

const MethodsPage = async ({ params: { locale } }: MethodsPageProps) => {
  const { t } = await initTranslations(locale, methodsNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    <div>
      <Methods data={data} />
    </div>
  );
};

export default MethodsPage;
