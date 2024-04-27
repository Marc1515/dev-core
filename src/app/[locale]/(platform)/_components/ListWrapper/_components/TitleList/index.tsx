import React from "react";

interface TitleListProps {
  children: React.ReactNode;
}

export const TitleList = ({ children }: TitleListProps) => {
  return (
    <div className="pb-5">
      <span className="text-xl font-bold">{children}</span>;
    </div>
  );
};
