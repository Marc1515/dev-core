"use client";

import React from "react";
import ClipboardButton from "@/app/(platform)/_components/ClipboardButton";

const FunctionsDeclarations = () => {
  const codeToCopy = `
  
    function greet(name) {
      return \`Hello, \${name}!\`;
    }
    console.log(greet('Ana')); // "Hello, Ana!"

    `;

  return (
    <div>
      <span>Functions Declarations</span>
      <p>
        Function declarations are perhaps the most traditional way of defining
        functions in JavaScript. They are characterized by having a name and do
        not require assignment to a variable. A distinctive aspect of this type
        of function is that they are hoisted, meaning they can be called before
        they appear in the code due to how JavaScript interprets functions.
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default FunctionsDeclarations;
