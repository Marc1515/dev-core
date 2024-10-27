"use client";

import React from "react";
import ClipboardButton from "../ClipboardButton";

interface CodeComponentProps {
  codeToCopy: string[] | string;
  idx?: number;
}

export const CodeComponent = ({ codeToCopy, idx }: CodeComponentProps) => {
  let code: string;

  if (Array.isArray(codeToCopy)) {
    if (idx !== undefined) {
      code = codeToCopy[idx];
    } else {
      code = codeToCopy[0];
    }
  } else {
    code = codeToCopy;
  }

  return (
    <div className="flex flex-col items-end pr-4 mt-10 codeWrapperShadow">
      <ClipboardButton textToCopy={code} />
      <pre className="w-full pb-5 pl-5 overflow-x-auto">{code}</pre>
    </div>
  );
};
