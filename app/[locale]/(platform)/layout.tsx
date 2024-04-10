import initTranslations from "@/app/i18n";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { Toaster } from "sonner";
import { Navbar } from "./_components/Navbar";
import TranslationsProvider from "@/lib/TranslationProvider";

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
    <LocaleProvider initialLocale={locale}>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <Toaster position="top-right" />
        <Navbar params={{ locale }} />
        <div>{children}</div>
      </TranslationsProvider>
    </LocaleProvider>
  );
};

export default PlatformLayout;
