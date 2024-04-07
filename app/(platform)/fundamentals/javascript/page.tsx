import React from "react";

const JavaScriptPage = () => {
  return (
    <div>
      <h1>JavaScript</h1>
      <p>
        It&apos;s an interpreted programming language primarily used on the
        client-side for creating dynamic web pages, enabling interactivity with
        the user, data manipulation, and more.
      </p>
      <span>Primitive Types</span>
      <p>These are the basics types of data:</p>
      <ul>
        <li>
          <p>
            <strong>String:</strong>It&apos;s a sequence of characters used to
            represent text. For example, &apos;Hello, World!&apos;.
          </p>
        </li>
        <li>
          <p>
            <strong>Number:</strong>Represents both integer and floating-point
            numbers. For example, 42 or 3.14. JavaScript uses double-precision
            floating-point format for numbers.
          </p>
        </li>
        <li>
          <p>
            <strong>BigInt:</strong>An integer with arbitrary precision.
            It&apos;s useful for very large numbers. For example,
            9007199254740991n.
          </p>
        </li>
        <li>
          <p>
            <strong>Boolean:</strong>Represents a logical entity and can have
            two values: true and false.
          </p>
        </li>
        <li>
          <p>
            <strong>Undefined:</strong>A variable that has not been assigned a
            value has the value undefined.
          </p>
        </li>
        <li>
          <p>
            <strong>Null:</strong>Denotes a null value. It&apos;s used to
            represent a non-existent or invalid object or address.
          </p>
        </li>
        <li>
          <p>
            <strong>Symbol:</strong>A unique and immutable primitive introduced
            in ES6, used as the key of an Object property.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default JavaScriptPage;
