"use client";

import React from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const ConstructorFunctions = () => {
  const codeToCopy = `
  
    function Person(name) {
        this.name = name;
        this.greet = function() {
            return \`Hello, I'm \${this.name}\`;
        };
    }

    const ana = new Person('Ana');

    console.log(ana.greet()); // "Hello, I'm Ana";`;

  return (
    <div>
      <span>Constructor Functions</span>
      <p>
        Constructor functions are used along with the new operator to create
        objects of a specific type. Traditionally, they have been used to
        implement what resembles classes before ES6 introduced class syntax in
        JavaScript.
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default ConstructorFunctions;
