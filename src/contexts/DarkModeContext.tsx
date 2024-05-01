"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface DarkModeContextType {
  isDarkActive: boolean;
  setIsDarkActive: (isDarkActive: boolean) => void;
  toggleDarkMode: () => void;
}

const defaultValue: DarkModeContextType = {
  isDarkActive: false,
  setIsDarkActive: () => {},
  toggleDarkMode: () => {},
};

const DarkModeContext = createContext<DarkModeContextType>(defaultValue);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkActive, setIsDarkActive] = useState(false);

  const toggleDarkMode = () => setIsDarkActive(!isDarkActive);

  return (
    <DarkModeContext.Provider
      value={{ isDarkActive, setIsDarkActive, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
