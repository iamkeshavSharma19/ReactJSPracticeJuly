import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const todoContext = createContext();

const TodoContextProvider = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editId, setEditId] = useState(null);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveTask = () => {
    if (!title || !description) {
      toast.error("All the input fields are mandatory");
      return;
    }
    //?But what if the user has correctly entered the todo's title as well as the description
    if (editId) {
      const todos = [...allTodos];
      const updatedTodos = todos.map((todo) => {
        if (editId === todo.id) {
          return { ...todo, title, description };
        } else {
          return todo;
        }
      });
      setAllTodos(updatedTodos);
      toast.success("Task Updated Successfully");
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTitle("");
      setDescription("");
      setEditId(null);
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };
    setAllTodos((prev) => [...prev, newTodo]);
    //?Also showing the toast notification
    toast.success("Task saved successfully");
    //~Now also saving the todos in the local Storage.
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    setTitle("");
    setDescription("");
  };

  //?Deleting the todo.
  const handleDeleteTodo = (id) => {
    const todos = [...allTodos];
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setAllTodos(filteredTodos);
    toast.info("Task deleted successfully");
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  //~Editing the todo
  const handleEditTodo = (id) => {
    const todos = [...allTodos];
    const todoToBeEdited = todos.find((todo) => todo.id === id);
    setTitle(todoToBeEdited.title);
    setDescription(todoToBeEdited.description);
    setEditId(todoToBeEdited.id);
  };

  return (
    <todoContext.Provider
      value={{
        title,
        description,
        handleTitle,
        handleDescription,
        handleSaveTask,
        allTodos,
        handleDeleteTodo,
        handleEditTodo,
        editId,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
