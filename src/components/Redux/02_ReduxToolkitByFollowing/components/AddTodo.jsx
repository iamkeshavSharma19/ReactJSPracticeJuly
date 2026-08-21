import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slices/Todo/todoSlice";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const editId = useSelector((state) => state.editId);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <h1>Add Todos</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todos">Add Your Todos : </label>
        <input
          type="text"
          placeholder="Add Your Todos"
          id="todos"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <br /> <br />
        <button>{editId ? "Update" : "Add Todo"}</button>
      </form>
    </div>
  );
};

export default AddTodo;
