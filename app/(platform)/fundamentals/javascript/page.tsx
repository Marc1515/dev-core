import React from "react";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";
import { ObjectTypes } from "./_components/ObjectTypes";

const JavaScriptPage = () => {
  return (
    <div>
      <h1>JavaScript</h1>
      <p>
        It&apos;s an interpreted programming language primarily used on the
        client-side for creating dynamic web pages, enabling interactivity with
        the user, data manipulation, and more.
      </p>
      <PrimitiveTypes />
      <ObjectTypes />
    </div>
  );
};

export default JavaScriptPage;
