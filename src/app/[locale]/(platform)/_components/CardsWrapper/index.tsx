import React from "react";

interface CardsWrapperProps {
  children: React.ReactNode;
}

export const CardsWrapper = ({ children }: CardsWrapperProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-5 justify-evenly">
      {children}
    </div>
  );
};
