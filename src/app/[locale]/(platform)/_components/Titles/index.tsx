import React from "react";

interface TitlesProps {
  children: React.ReactNode;
}

/* Intro Title */
export const IntroTitle = ({ children }: TitlesProps) => {
  return <h1 className="text-3xl font-bold pb-10">{children}</h1>;
};

/* Secondary Title */
export const SecondaryTitle = ({ children }: TitlesProps) => {
  return <span className="block text-xl font-bold pb-10">{children}</span>;
};

/* Loop Title */
export const LoopTitle = ({ children }: TitlesProps) => {
  return <span className="block text-xl font-bold">{children}</span>;
};

/* Sub Title */
export const SubTitle = ({ children }: TitlesProps) => {
  return <span className="block font-bold pb-5">{children}</span>;
};
