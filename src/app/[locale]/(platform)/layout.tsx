import initTranslations from "@/app/i18n";
import { Toaster } from "sonner";
import { Navbar } from "./_components/Navbar";
import TranslationsProvider from "@/lib/TranslationProvider";
import { navbarNamespaces } from "@/constants/namespaces/othersNamespaces";
import { MobileSidebar } from "./_components/MobileSidebar";
import { BurgerButtonProvider } from "@/contexts/BurgerButtonContext";
import { MainWrapperContent } from "./_components/Wrappers";
import { MobileNavbar } from "./_components/MobileNavbar";

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
        <MobileNavbar />
        <MobileSidebar data={data} />
      </BurgerButtonProvider>
      <MainWrapperContent>{children}</MainWrapperContent>
    </TranslationsProvider>
  );
};

export default PlatformLayout;
