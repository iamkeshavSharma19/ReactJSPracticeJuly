import React, { useReducer } from "react";

//&useReducer hook is used for the complex state Management whereas the useState Hook is used for the simple state Management.

//~useReducer Hook has 2 arguments === one is the redFn and the other argument is the initialState.We have to manually make the reducerFn and initial state.

//?initialState value will be stored inside the count variable.
let initialState = 0;

//& dispatch function will call the reducer function with the argument "incre", "decre" or "reset" based on the action passed in the button.

const reducerFunction = (prevState, action) => {
  console.log(prevState, action);

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

const UseReducerHookByFollowing = () => {
  const [count, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <h1>Learn useReducer Hook In React</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch("incre")}>Increment</button>
      <button onClick={() => dispatch("decre")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReducerHookByFollowing;
