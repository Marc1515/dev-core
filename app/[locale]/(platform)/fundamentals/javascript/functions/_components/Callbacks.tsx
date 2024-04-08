"use client";

import React from "react";
import ClipboardButton from "@/app/(platform)/_components/ClipboardButton";

const Callbacks = () => {
  const codeToCopy = `
  
    function processUserInput(callback) {
        const name = prompt('Please enter your name.');
        callback(name);
    }

    processUserInput(function(name) {
        console.log('Hello, ' + name);
    });`;

  return (
    <div>
      <span>Callbacks</span>
      <p>
        A callback is a function passed into another function as an argument,
        which is then invoked inside the outer function to complete some kind of
        routine or action. Callbacks are a fundamental concept in JavaScript,
        especially in asynchronous operations like handling events, server
        requests, or timers.
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default Callbacks;
