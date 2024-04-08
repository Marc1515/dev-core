"use client";

import React from "react";
import ClipboardButton from "@/app/[locale]/(platform)/_components/ClipboardButton";

const Closures = () => {
  const codeToCopy = `
  
    function createGreeting(greeting) {
        return function(name) {
            return \`\${greeting}, \${name}!\`;
        };
    }

    const sayHello = createGreeting('Hello');
    const sayHi = createGreeting('Hi');

    console.log(sayHello('Alice')); // "Hello, Alice!"
    console.log(sayHi('Bob')); // "Hi, Bob!"`;

  return (
    <div>
      <span>Closures</span>
      <p>
        A closure is a function that remembers and continues to access variables
        from outside its scope even after the outer function has finished
        executing. This powerful feature of JavaScript allows you to create
        private variables and encapsulate functionality. Closures are created
        every time a function is created, at function creation time.
      </p>
      <div>
        <pre>{codeToCopy}</pre>
        <ClipboardButton textToCopy={codeToCopy} />
      </div>
    </div>
  );
};

export default Closures;
