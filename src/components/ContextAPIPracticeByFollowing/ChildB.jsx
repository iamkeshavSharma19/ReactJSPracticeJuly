import React, { useContext } from "react";
import { myStore } from "./ContextExample";

const ChildB = () => {
  //~Step 3 ==> Consuming the Context
  let data = useContext(myStore);
  return (
    <div>
      <h1>Child B - {data.str}</h1>
    </div>
  );
};

export default ChildB;
