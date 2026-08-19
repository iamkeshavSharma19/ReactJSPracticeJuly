import React, { useState, useEffect, useRef } from "react";

const LifeCycleInFBCPracticeOwnMyOwn = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true);
  let intervalId = undefined;

  useEffect(() => {
    console.log("componentDidMount");
    intervalId = setInterval(() => {
      console.log("API Calling");
    }, 2000);

    return () => {
      clearInterval(intervalId);
      console.log("componentWillUnmount And API Calling Stopped");
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log("ComponentDidUpdate");
  }, [count]);

  return (
    <div>
      <h1>Practicing Life Cycle Methods In Function Based Components</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button
        onClick={() =>
          setCount((prev) => {
            return prev === 0 ? 0 : prev - 1;
          })
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default LifeCycleInFBCPracticeOwnMyOwn;
