import React from "react";

interface ConclusionProps {
  children: React.ReactNode;
}

export const Conclusion = ({ children }: ConclusionProps) => {
  return <p>{children}</p>;
};
