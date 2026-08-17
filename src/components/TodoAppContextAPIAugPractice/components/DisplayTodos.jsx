import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const DisplayTodos = () => {
  const { allTodos, handleDeleteTodo, handleEditTodo } =
    useContext(TodoContext);

  return (
    <div>
      <h1>All Todos Will Be Displayed Here ...</h1>
      {allTodos.map((todo) => {
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
            <h2>{todo.name}</h2>
            <button
              style={{
                height: "40px",
                width: "100px",
                borderRadius: "10px",
                fontSize: "15px",
              }}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              style={{
                height: "40px",
                width: "100px",
                borderRadius: "10px",
                fontSize: "15px",
              }}
              onClick={() => handleEditTodo(todo.id)}
            >
              Edit
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default DisplayTodos;
