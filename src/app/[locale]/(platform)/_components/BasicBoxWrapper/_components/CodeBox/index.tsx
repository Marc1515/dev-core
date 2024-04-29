import React from "react";

interface CodeBoxProps {
  children: React.ReactNode;
}

export const CodeBox = ({ children }: CodeBoxProps) => {
  return <pre className="overflow-x-auto">{children}</pre>;
};
