import React, { useReducer } from "react";

const Reducer = () => {
  let initialState = 0;
  const reducerFunction = (prevState, action) => {
    switch (action) {
      case "incre":
        return prevState + 1;
        break;

      case "decre":
        return prevState === 0 ? 0 : prevState - 1;
        break;

      case "reset":
        return 0;
        break;
    }
  };
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <h1>Practicing useReducer Hook In ReactJS</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch("incre")}>Increment</button>
      <button onClick={() => dispatch("decre")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Reducer;
