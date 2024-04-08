"use client";

import React from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const AsyncFunctions = () => {
  const codeToCopy = `
  
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }`;

  return (
    <div>
      <span>Async Functions</span>
      <p>
        Async functions, introduced in ES2017, are an addition that allows
        working with promises in a cleaner and more readable way using {"async"}{" "}
        and
        {"await"}. They are particularly useful for handling asynchronous
        operations like API calls or file reads in a manner that resembles
        synchronous execution.
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default AsyncFunctions;
