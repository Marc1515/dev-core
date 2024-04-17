"use client";
import React from "react";
import { javascriptNamespaces } from "@/constants/translationNamespaces";
import { useTranslations } from "@/hooks/useTranslations";

export const PrimitiveTypes = () => {
  const translations = useTranslations(javascriptNamespaces);

  if (!translations) {
    return;
  }

  const { t } = translations;

  const mainT = (key: string) =>
    t(`syntax_and_basic_concepts.data_types.primitive_types.${key}`);

  return (
    <div>
      {/* Primitive Types */}
      <span>{mainT("title")}</span>
      <p>{mainT("description")}</p>
      <ul>
        <li>
          <p>
            <strong>{mainT("types.string.title")}:</strong>{" "}
            {mainT("types.string.description")}
          </p>
        </li>
        <li>
          <p>
            <strong>{mainT("types.number.title")}:</strong>{" "}
            {mainT("types.number.description")}
          </p>
        </li>
        <li>
          <p>
            <strong>{mainT("types.big_int.title")}:</strong>{" "}
            {mainT("types.big_int.description")}
          </p>
        </li>
        <li>
          <p>
            <strong>{mainT("types.undefined.title")}:</strong>{" "}
            {mainT("types.undefined.description")}
          </p>
        </li>
        <li>
          <p>
            <strong>{mainT("types.null.title")}:</strong>{" "}
            {mainT("types.null.description")}
          </p>
        </li>
        <li>
          <p>
            <strong>{mainT("types.symbol.title")}:</strong>{" "}
            {mainT("types.symbol.description")}
          </p>
        </li>
      </ul>
    </div>
  );
};
