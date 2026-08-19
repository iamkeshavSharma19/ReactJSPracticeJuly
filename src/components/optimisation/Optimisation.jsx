import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";

const Optimisation = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  //   const multiply = () => {
  //     console.log("multiply");
  //     return add * 5;
  //   };
  const multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  const arr = [10, 20, 30];

  const display = useCallback((arr) => {
    console.log(arr);

    console.log("Display function");
  }, []);
  return (
    <div>
      <h1>Learning Optimisation In ReactJS</h1>
      <hr />
      <h1>Addition = {add}</h1>
      <button onClick={() => setAdd((prev) => prev + 1)}>increment</button>
      <hr />
      <h1>Subtraction = {minus}</h1>
      <button onClick={() => setMinus((prev) => prev - 1)}>decrement</button>
      <h1>Multiplication = {multiply}</h1>
      <hr />
      <Child data={display} />
    </div>
  );
};

export default Optimisation;
