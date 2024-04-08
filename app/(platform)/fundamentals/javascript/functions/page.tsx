import React from "react";
import FunctionsDeclarations from "./_components/FunctionsDeclarations";
import FunctionsExpressions from "./_components/FunctionsExpression";
import ArrowFunctions from "./_components/ArrowFunctions";
import ConstructorFunctions from "./_components/ConstructorFunctions";
import GeneratorFunctions from "./_components/GeneratorFunctions";
import AsyncFunctions from "./_components/AsyncFunctions";
import Closures from "./_components/Closures";
import Callbacks from "./_components/Callbacks";

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
      <FunctionsExpressions />
      <ArrowFunctions />
      <ConstructorFunctions />
      <GeneratorFunctions />
      <AsyncFunctions />
      <Closures />
      <Callbacks />
      <p>
        Each type of function in JavaScript has its purpose and situations where
        it is most useful. Understanding these different types will allow you to
        write clearer and more effective code, choosing the form of function
        that best suits your needs in each case.
      </p>
    </div>
  );
};

export default FunctionsPage;
