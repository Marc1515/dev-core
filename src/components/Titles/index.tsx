import React from "react";

interface TitlesProps {
  children: React.ReactNode;
}

/* Intro Title */
export const IntroTitle = ({ children }: TitlesProps) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};

/* Secondary Title */
export const SecondaryTitle = ({ children }: TitlesProps) => {
  return <span className="block text-xl font-bold">{children}</span>;
};

/* Loop Title */
export const LoopTitle = ({ children }: TitlesProps) => {
  return <span className="block text-xl font-bold">{children}</span>;
};

/* Sub Title */
export const SubTitle = ({ children }: TitlesProps) => {
  return <span className="block font-bold">{children}</span>;
};
