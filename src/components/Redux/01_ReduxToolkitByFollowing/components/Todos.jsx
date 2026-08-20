import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../slices/Todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>All Todos will be displayed here</h1>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </div>
  );
};

export default Todos;
