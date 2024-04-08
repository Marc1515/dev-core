import React from "react";
import { FunctionsDeclarations } from "./_components/FunctionsDeclarations";

const FunctionsPage = () => {
  return (
    <div>
      <h1>Functions</h1>
      <p>
        Functions in JavaScript are blocks of code designed to perform a
        specific task. They are defined once and can be invoked or {"called"} as
        many times as necessary, which allows for code reuse and more efficient
        organization. Functions can receive data as input, called parameters,
        process that data, and return a result.
      </p>
      <FunctionsDeclarations />
    </div>
  );
};

export default FunctionsPage;
