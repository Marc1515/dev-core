import React from "react";
import initTranslations from "@/app/i18n";
import { navigationNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { Navigation } from "./_components/Navigation";

interface NavigationPageProps {
  params: {
    locale: string;
  };
}

const NavigationPage = async ({ params: { locale } }: NavigationPageProps) => {
  const { t } = await initTranslations(locale, navigationNamespaces);
  const data = t("data", { returnObjects: true });
  return (
    <div>
      <Navigation data={data} />
    </div>
  );
};

export default NavigationPage;
