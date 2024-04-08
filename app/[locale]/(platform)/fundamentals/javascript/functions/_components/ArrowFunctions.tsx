"use client";

import React from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const ArrowFunctions = () => {
  const codeToCopy = `
  
    const add = (a, b) => a + b;
        console.log(add(5, 3)); // 8
    `;

  return (
    <div>
      <span>Arrow Functions</span>
      <p>
        Introduced in ES6, arrow functions offer a shorter and more concise
        syntax. They do not have their own this, arguments, super, or
        new.target, which makes them an ideal choice for functions that do not
        define their own behavior, such as those used in callbacks or
        higher-order functions. They cannot be used as constructors.
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default ArrowFunctions;
