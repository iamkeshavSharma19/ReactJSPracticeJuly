import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>

      <ChildA />

      <ChildB />
    </div>
  );
};

export default Parent;
