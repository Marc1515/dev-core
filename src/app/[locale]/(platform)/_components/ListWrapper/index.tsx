import React from "react";

interface ListWrapperProps {
  children: React.ReactNode;
}

export const ListWrapper = ({ children }: ListWrapperProps) => {
  return <div className="w-full h-full py-5">{children}</div>;
};
