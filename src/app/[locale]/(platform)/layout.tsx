import initTranslations from "@/app/i18n";
import { Toaster } from "sonner";
import { Navbar } from "./_components/Navbar";
import TranslationsProvider from "@/lib/TranslationProvider";
import { navbarNamespaces } from "@/constants/namespaces/othersNamespaces";
import { MobileSidebar } from "./_components/MobileSidebar";
import { BurgerButton } from "./_components/BurgerButton";
import { BurgerButtonProvider } from "@/contexts/BurgerButtonContext";

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
      <BurgerButtonProvider>
        <BurgerButton />
        <MobileSidebar data={data} />
      </BurgerButtonProvider>
      <div className="h-full">{children}</div>
    </TranslationsProvider>
  );
};

export default PlatformLayout;
