import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import { store } from "./store";
import { Provider } from "react-redux";

const ReduxApp = () => {
  const [todo, setTodo] = useState("");
  return (
    <Provider store={store}>
      <h1>Redux Toolkit + Local Storage</h1>
      <AddTodo todo={todo} setTodo={setTodo} />
      <hr />
      <DisplayTodos todo={todo} setTodo={setTodo} />
    </Provider>
  );
};

export default ReduxApp;
