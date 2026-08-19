import React from "react";

const Child = () => {
  console.log("I am child");

  return (
    <div>
      <h1>Hey I am Child</h1>
    </div>
  );
};

export default React.memo(Child);
