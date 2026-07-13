import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    //?Checking if there is any array of objects i.e todos already present in the local Storage.
    //?This is basically for showing all the todos on the UI
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //~Date.now() === gives us the current date with milliseconds and milliseconds will always be unique
    //?trim() === It is used for removing the leading as well as the trailing spaces.
    const newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };
    setAllTodos((prev) => [...prev, newTodo]);
    //&This is basically for storing all the todos in the local Storage
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    setTodo("");
  };
  return (
    <TodoContext.Provider value={{ todo, handleTodo, handleSubmit, allTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
