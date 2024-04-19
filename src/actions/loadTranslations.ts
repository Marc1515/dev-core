interface LoadTranslationsParams {
  locale: string;
  namespace: string[];
  key: string;
}

import initTranslations from "@/app/i18n";

export default async function loadTranslations({
  locale,
  namespace,
  key,
}: LoadTranslationsParams) {
  const { t } = await initTranslations(locale, namespace);
  return t(key, { returnObjects: true });
}
