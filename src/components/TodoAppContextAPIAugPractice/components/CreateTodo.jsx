import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const CreateTodo = () => {
  const { todo, handleTodo, handleTodoSubmit, editId } =
    useContext(TodoContext);
  return (
    <div>
      <h1>Create A Todo</h1>
      <hr />
      <br />
      <form onSubmit={handleTodoSubmit}>
        <label htmlFor="todo">TodoName : </label>
        <input
          type="text"
          placeholder="Enter a Todo..."
          required
          value={todo}
          onChange={handleTodo}
        />
        <button>{editId ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default CreateTodo;
