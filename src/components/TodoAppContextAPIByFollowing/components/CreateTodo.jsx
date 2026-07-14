import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const CreateTodo = () => {
  const { todo, handleTodo, handleSubmit, editId } = useContext(TodoContext);
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
        <button>{editId ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default CreateTodo;
