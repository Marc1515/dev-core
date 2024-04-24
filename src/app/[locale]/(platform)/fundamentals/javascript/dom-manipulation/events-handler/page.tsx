import React from "react";

import initTranslations from "@/app/i18n";
import { eventsHandlerNamespaces } from "@/constants/namespaces/javaScriptNamespaces";
import { EventsHandler } from "./_components/EventsHandler";

interface EventsHandlerPageProps {
  params: {
    locale: string;
  };
}

const EventsHandlerPage = async ({
  params: { locale },
}: EventsHandlerPageProps) => {
  const { t } = await initTranslations(locale, eventsHandlerNamespaces);
  const data = t("data", { returnObjects: true });
  return (
    <div>
      <EventsHandler data={data} />
    </div>
  );
};

export default EventsHandlerPage;
