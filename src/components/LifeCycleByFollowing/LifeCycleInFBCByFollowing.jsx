import React, { useState, useEffect, useRef } from "react";

const LifeCycleInFBCByFollowing = () => {
  const [count, setCount] = useState(0);

  const initialRender = useRef(true);

  useEffect(() => {
    console.log("Component Did Mount");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  //*Updating Phase
  //!Problem is that during the component mounting i.e during the initial render also this useEffect's updating call back function is executed,we basically have to stop it during the initial render.for that we will use useRef Hook.
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log("Component Did Update");

    //?cleanUp function is executed during unmounting phase only
    return () => {
      console.log("Component Unmounted");
    };
  }, [count]);
  return (
    <div>
      <h1>Learn Life Cycle Methods In Function Based Components</h1>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default LifeCycleInFBCByFollowing;
