"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { domManipulationNamespaces } from "@/constants/translationNamespaces";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

export const EventsHandle = () => {
  const codeToCopy1 = `
    // Add a click event listener to a button
    const button = document.getElementById('my-button');
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });`;

  const codeToCopy2 = `
    // Stop the propagation of an event
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up the DOM
        alert('Click event will not propagate further.');
    });`;

  const translations = useTranslations(domManipulationNamespaces);

  if (!translations) return;

  const { t: mainT } = translations;

  return (
    <div>
      <div>
        <span>{mainT("domm_events_handle_title")}</span>
      </div>
      <strong>{mainT("domm_eh_adding_events_title")}</strong>
      <p>{mainT("domm_eh_adding_events_explanation")}</p>
      <div>
        <pre>{codeToCopy1}</pre>
        <ClipboardButton textToCopy={codeToCopy1} />
      </div>
      <strong>{mainT("domm_eh_event_handler_functions_title")}</strong>
      <p>{mainT("domm_eh_event_handler_functions_explanation")}</p>
      <strong>{mainT("domm_eh_event_propagation_title")}</strong>
      <p>{mainT("domm_eh_event_propagation_explanation")}</p>
      <div>
        <pre>{codeToCopy2}</pre>
        <ClipboardButton textToCopy={codeToCopy2} />
      </div>
    </div>
  );
};
