import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/lib/TranslationProvider";
import { Toaster } from "sonner";
import { Navbar } from "./_components/Navbar";

interface PlatformLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const i18nNamespaces = [""];

const PlatformLayout = async ({ children, params }: PlatformLayoutProps) => {
  const { locale } = params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <Toaster position="top-right" />
      <Navbar />
      <div>{children}</div>
    </TranslationsProvider>
  );
};

export default PlatformLayout;
