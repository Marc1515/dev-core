import Link from "next/link";
import React from "react";

export const ObjectTypes = () => {
  return (
    <div>
      <span>Objetc Types</span>
      <p>
        JavaScript allows you to create objects, which are collections of
        properties:
      </p>
      <ul>
        <li>
          <p>
            <strong>Object:</strong>The most basic structure for storing data in
            a key-value format. For example, {"{ name: 'John', age: 30 }"}.
          </p>
        </li>
        <li>
          <p>
            <strong>Array:</strong>A special kind of object used for storing
            ordered collections. For example, {"['apple', 'banana', 'cherry']"}.
          </p>
        </li>
        <li>
          <p>
            <strong>
              <Link href={"/fundamentals/javascript/functions"}>Function:</Link>
            </strong>
            A block of code designed to perform a particular task. Functions are
            objects too.
          </p>
        </li>
      </ul>
    </div>
  );
};
