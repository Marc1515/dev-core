import initTranslations from "@/app/i18n";
import { Toaster } from "sonner";
import { Navbar } from "./_components/Navbar";
import TranslationsProvider from "@/lib/TranslationProvider";
import { navbarNamespaces } from "@/constants/namespaces/othersNamespaces";

interface PlatformLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const i18nNamespaces = [""];

const PlatformLayout = async ({ children, params }: PlatformLayoutProps) => {
  const { locale } = params;

  const { t } = await initTranslations(locale, navbarNamespaces);
  const data = t("data", {
    returnObjects: true,
  });

  return (
    <TranslationsProvider
      resources={data}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <Toaster position="top-right" />
      <Navbar data={data} />
      <div className="h-full">{children}</div>
    </TranslationsProvider>
  );
};

export default PlatformLayout;
