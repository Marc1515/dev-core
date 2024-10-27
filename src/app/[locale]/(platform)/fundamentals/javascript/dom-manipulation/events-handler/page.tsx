import initTranslations from "@/app/i18n";

import { eventsHandlerNamespaces } from "@/constants/namespaces/javaScriptNamespaces";

import { EventsHandlerTypes } from "@/types/events-handler";

import { codes } from "@/codes/events-handler";

/* Wrappers */
import { BasicBoxWrapper } from "@/components/Wrappers";
/* Titles */
import { IntroTitle, SecondaryTitle } from "@/components/Titles";
/* Paragraphs */
import { BasicDescription, Conclusion } from "@/components/Paragraphs";
import { CodeComponent } from "@/components/CodeComponent";

interface EventsHandlerPageProps {
  params: {
    locale: string;
  };
}

const EventsHandlerPage = async ({
  params: { locale },
}: EventsHandlerPageProps) => {
  const { t } = await initTranslations(locale, eventsHandlerNamespaces);
  const data: EventsHandlerTypes["data"] = t("data", { returnObjects: true });
  return (
    <>
      {/* Introduction */}
      <>
        <IntroTitle>{data.title}</IntroTitle>
        <BasicDescription>{data.description}</BasicDescription>
      </>
      {/* Each Event Handler */}

      {data.events.map((item, idx) => (
        <BasicBoxWrapper key={idx}>
          <SecondaryTitle>{item.title}</SecondaryTitle>
          <BasicDescription>{item.description}</BasicDescription>
          {/* Code */}
          <CodeComponent codeToCopy={codes} idx={idx} />
        </BasicBoxWrapper>
      ))}
      <BasicBoxWrapper>
        <Conclusion>{data.conclusion}</Conclusion>
      </BasicBoxWrapper>
    </>
  );
};

export default EventsHandlerPage;
