"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface BurgerButtonContextType {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  toggleBurgerButton: () => void;
}

const defaultValue: BurgerButtonContextType = {
  isActive: false,
  setIsActive: () => {},
  toggleBurgerButton: () => {},
};

const BurgerButtonContext =
  createContext<BurgerButtonContextType>(defaultValue);

interface BurgerButtonProviderProps {
  children: ReactNode;
}

export const BurgerButtonProvider: React.FC<BurgerButtonProviderProps> = ({
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleBurgerButton = () => setIsActive(!isActive);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  return (
    <BurgerButtonContext.Provider
      value={{ isActive, setIsActive, toggleBurgerButton }}
    >
      {children}
    </BurgerButtonContext.Provider>
  );
};

export const useBurgerButtonContext = () => useContext(BurgerButtonContext);
