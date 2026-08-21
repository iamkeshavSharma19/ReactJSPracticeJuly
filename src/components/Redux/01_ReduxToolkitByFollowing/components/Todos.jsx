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
        return (
          <section
            key={todo.id}
            style={{
              border: "2px solid black",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "wheat",
            }}
          >
            <h2>{todo.text}</h2>
            <button
              style={{
                height: "40px",
                width: "100px",
                borderRadius: "10px",
                fontSize: "15px",
              }}
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default Todos;
