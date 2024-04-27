import React from "react";

interface DescriptionListProps {
  children: React.ReactNode;
}

export const DescriptionList = ({ children }: DescriptionListProps) => {
  return (
    <div className="pb-5">
      <p>{children}</p>
    </div>
  );
};
