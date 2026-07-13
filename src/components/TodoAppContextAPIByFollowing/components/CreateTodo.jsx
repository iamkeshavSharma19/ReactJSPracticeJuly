import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const CreateTodo = () => {
  const { todo, handleTodo, handleSubmit } = useContext(TodoContext);
  return (
    <div>
      <h1>Create Todos</h1>
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo..."
          value={todo}
          onChange={handleTodo}
          required
        />
        <br /> <br />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
