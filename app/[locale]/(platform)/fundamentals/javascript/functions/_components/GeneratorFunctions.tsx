"use client";

import React from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const GeneratorFunctions = () => {
  const codeToCopy = `
  
    function* generateId() {
        let id = 0;
        while(true) {
            yield id++;
        }
    }

    const gen = generateId();

    console.log(gen.next().value); // 0
    
    console.log(gen.next().value); // 1`;

  return (
    <div>
      <span>Generator Functions</span>
      <p>
        Generator functions are a special type of function that can pause its
        execution and then continue from where it left off. This is achieved by
        using the {"yield"} keyword. They are useful for defining iterators or
        managing sequences of asynchronous operations more efficiently.
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default GeneratorFunctions;
