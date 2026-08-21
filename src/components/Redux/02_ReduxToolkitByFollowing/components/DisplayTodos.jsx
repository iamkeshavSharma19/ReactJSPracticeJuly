import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../slices/Todo/todoSlice";
import { editTodo, setEditId } from "../slices/Todo/todoSlice";
import { useState } from "react";

const DisplayTodos = ({ todo, setTodo }) => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const handelDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const handleEditTodo = (id) => {
    dispatch(setEditId(id));
    dispatch(editTodo(id));
    
  };
  return (
    <div>
      <h1>All The Todos Will Be Displayed Here ...</h1>
      {todos.map((todo) => {
        return (
          <section
            key={todo.id}
            style={{
              border: "2px solid black",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "aqua",
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
              onClick={() => handelDeleteTodo(todo.id)}
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
