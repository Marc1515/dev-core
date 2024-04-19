"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { operatorsNamespaces } from "@/constants/translationNamespaces";

interface StringOperatorProps {
  data: {
    symbol: string;
    title: string;
    description: string;
  };
}

export const StringOperator = ({ data }: StringOperatorProps) => {
  const translations = useTranslations(operatorsNamespaces);

  if (!translations) return;

  const { t } = translations;

  return (
    <div>
      <span>{data.title}</span>
      <ul>
        <li>
          <p>
            <strong>({data.symbol})</strong> : {data.description}
          </p>
        </li>
      </ul>
    </div>
  );
};
