import React from "react";

interface ParagraphsProps {
  children: React.ReactNode;
}

/* Basic Description */
export const BasicDescription = ({ children }: ParagraphsProps) => {
  return <p className="pt-10">{children}</p>;
};

/* Conclusion */
export const Conclusion = ({ children }: ParagraphsProps) => {
  return <p>{children}</p>;
};
