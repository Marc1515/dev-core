"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

interface ItemsType {
  title: string;
  description: string;
}

interface TypeOperators {
  data: {
    title: string;
    description: string;
    items: ItemsType[];
  };
}

export const TypeOperators = ({ data }: TypeOperators) => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{data.title}</span>
      <p>{data.description}</p>
      <ul>
        {data.items.map((item) => (
          <li key={item.title}>
            <p>
              <strong>{item.title}: </strong> {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
