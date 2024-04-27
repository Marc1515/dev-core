import React from "react";

interface ContentListProps {
  children: React.ReactNode;
}

export const ContentList = ({ children }: ContentListProps) => {
  return <ul>{children}</ul>;
};
