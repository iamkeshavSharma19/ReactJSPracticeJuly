import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/Todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <h1>Add Todos</h1>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="todos">Add Todos : </label>
        <input
          type="text"
          placeholder="Add Todos .."
          id="todos"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
