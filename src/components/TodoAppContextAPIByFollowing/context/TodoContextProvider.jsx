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
  //?Creating a new state variable for the editing
  const [editId, setEditId] = useState(null);
  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const todos = [...allTodos];
      const updatedTodos = todos.map((ele) => {
        if (ele.id === editId) {
          return { ...ele, text: todo };
        } else {
          return ele;
        }
      });
      setAllTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodo("");
      setEditId(null);
      return;
    }
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

  //?Deleting the todo
  const handleDeleteTodo = (id) => {
    const todos = [...allTodos];
    const filteredTodos = todos.filter((ele) => ele.id !== id);
    setAllTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  //~Editing the Todos
  const handleEditTodo = (id) => {
    //&Very Very similar to the delete functionality
    const todos = [...allTodos];
    const todoToEdit = todos.find((ele) => ele.id === id);
    setEditId(id);
    setTodo(todoToEdit.text);
  };
  return (
    <TodoContext.Provider
      value={{
        todo,
        handleTodo,
        handleSubmit,
        allTodos,
        handleDeleteTodo,
        handleEditTodo,
        editId,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
