"use client";

import React from "react";
import ClipboardButton from "@/app/(platform)/_components/ClipboardButton";

const FunctionsExpressions = () => {
  const codeToCopy = `
  
    const sayGoodbye = function(name) {
        return \`Goodbye, \${name}!\`;
    };

    console.log(sayGoodbye('Carlos')); // "Goodbye, Carlos!"`;

  return (
    <div>
      <span>Functions Expressions</span>
      <p>
        Unlike function declarations, function expressions are assigned to a
        variable. These functions can be anonymous (without a name) or named. An
        important detail is that they are not hoisted, so you cannot call them
        before they are defined in the code.
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default FunctionsExpressions;
