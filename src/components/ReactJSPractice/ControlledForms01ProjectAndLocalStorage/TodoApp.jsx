import React from "react";
import AddTodos from "./components/AddTodos";
import DisplayTodos from "./components/DisplayTodos";

const TodoApp = () => {
  return (
    <div>
      <h1>Todo List App</h1>
      <AddTodos />
      <hr />
      <DisplayTodos />
      <br />
    </div>
  );
};

export default TodoApp;
