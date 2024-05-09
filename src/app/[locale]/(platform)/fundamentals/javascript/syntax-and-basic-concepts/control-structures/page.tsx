import React from "react";
import initTranslations from "@/app/i18n";
import { controlStructuresNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { ControlStructures } from "./_components/ControlStructures";

interface ControlStructuresProps {
  params: {
    locale: string;
  };
}

const ControlStructuresPage = async ({
  params: { locale },
}: ControlStructuresProps) => {
  const { t } = await initTranslations(locale, controlStructuresNamespaces);
  const data = t("data", { returnObjects: true });

  return (
    /* Control Structures */
    <div>
      <ControlStructures data={data} />
    </div>
  );
};

export default ControlStructuresPage;
