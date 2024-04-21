import React from "react";
import initTranslations from "@/app/i18n";
import { operatorsNamespaces } from "@/constants/translationNamespaces";
import { Operators } from "./_components/Operators";

interface OperatorsProps {
  params: {
    locale: string;
  };
}

const OperatorsPage = async ({ params: { locale } }: OperatorsProps) => {
  const { t } = await initTranslations(locale, operatorsNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    /* Operators */
    <div>
      <Operators data={data} />
    </div>
  );
};

export default OperatorsPage;
