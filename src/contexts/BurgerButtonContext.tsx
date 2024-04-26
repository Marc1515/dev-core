"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define el tipo para el contexto
interface BurgerButtonContextType {
  isActive: boolean;
  toggleBurgerButton: () => void;
}

// Valor inicial por defecto
const defaultValue: BurgerButtonContextType = {
  isActive: false,
  toggleBurgerButton: () => {}, // Función vacía como placeholder
};

// Crear el contexto con el valor inicial por defecto
const BurgerButtonContext =
  createContext<BurgerButtonContextType>(defaultValue);

// Define el tipo para las props del proveedor
interface BurgerButtonProviderProps {
  children: ReactNode; // Esto indica que puede recibir componentes hijos
}

// Proveedor del contexto que gestiona el estado
export const BurgerButtonProvider: React.FC<BurgerButtonProviderProps> = ({
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  // Función para cambiar el estado
  const toggleBurgerButton = () => setIsActive(!isActive);

  return (
    <BurgerButtonContext.Provider value={{ isActive, toggleBurgerButton }}>
      {children}
    </BurgerButtonContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useBurgerButtonContext = () => useContext(BurgerButtonContext);
