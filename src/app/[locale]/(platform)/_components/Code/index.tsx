import React from "react";

interface CodeProps {
  children: React.ReactNode;
}

/* Code */
export const Code = ({ children }: CodeProps) => {
  return <pre className="w-full overflow-x-auto">{children}</pre>;
};
