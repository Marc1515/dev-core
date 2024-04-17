// hooks/useTranslations.tsx
import { useState, useEffect } from "react";
import initTranslations from "@/app/i18n";
import { useLocale } from "@/contexts/LocaleContext";
import i18next from "i18next";

export function useTranslations(namespaces: string[]) {
  const { locale } = useLocale();
  const [translations, setTranslations] = useState<{
    t: (key: string) => string;
  } | null>(null);

  useEffect(() => {
    async function loadTranslations() {
      const translationsResult = await initTranslations(locale, namespaces);
      setTranslations(translationsResult);
      i18next.t("array_donde_quiero_la_variable", { returnObjects: true });
    }

    loadTranslations();
  }, [locale, namespaces]);

  return translations;
}
