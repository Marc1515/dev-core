// hooks/useTranslations.tsx
import { useState, useEffect } from "react";
import initTranslations from "@/app/i18n";
import { useLocale } from "@/contexts/LocaleContext";

export function useTranslations(namespaces: string[]) {
  const { locale } = useLocale();
  const [translations, setTranslations] = useState<{
    t: (key: string) => string;
  } | null>(null);

  useEffect(() => {
    async function loadTranslations() {
      const translationsResult = await initTranslations(locale, namespaces);
      setTranslations(translationsResult);
    }

    loadTranslations();
  }, [locale, namespaces]); // Dependencias actualizadas para reaccionar a cambios en `locale` y `namespaces`.

  return translations;
}
