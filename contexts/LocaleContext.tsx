"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

export const LocaleProvider: React.FC<{
  children: ReactNode;
  initialLocale: string;
}> = ({ children, initialLocale }) => {
  const [locale, setLocale] = React.useState(initialLocale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
