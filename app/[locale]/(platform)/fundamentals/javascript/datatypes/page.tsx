import React from "react";
import { ObjectTypes } from "./_components/ObjectTypes";
import { PrimitiveTypes } from "./_components/PrimitiveTypes";

const DataTypes = () => {
  return (
    <div>
      <h1>Data Types</h1>
      <PrimitiveTypes />
      <ObjectTypes />
    </div>
  );
};

export default DataTypes;
