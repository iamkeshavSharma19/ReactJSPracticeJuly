import React, { createContext, useState } from "react";

//?Step1 ==> Creating the Context
export const TodoContext = createContext();

//?Step2 ==> Providing The Context using <TodoContext.Provider>

const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [editId, setEditId] = useState(null);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const todos = [...allTodos];
      const updatedTodos = todos.map((ele) => {
        if (ele.id === editId) {
          return {
            ...ele,
            name: todo,
          };
        } else {
          return ele;
        }
      });
      console.log(updatedTodos);

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setAllTodos(updatedTodos);
      setTodo("");
      setEditId(null);
      return;
    }
    const newTodo = {
      id: Date.now(),
      name: todo.trim(),
    };
    console.log(newTodo);
    const todos = [...allTodos];
    todos.push(newTodo);
    console.log(todos);
    //?Setting the allTodos in the local Storage As Well
    localStorage.setItem("todos", JSON.stringify(todos));
    setAllTodos(todos);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    const todos = [...allTodos];
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setAllTodos(filteredTodos);
  };

  const handleEditTodo = (id) => {
    console.log(id);
    const todos = [...allTodos];
    const todoToBeEdited = todos.find((todo) => todo.id === id);
    console.log(todoToBeEdited);

    setTodo(todoToBeEdited.name);
    setEditId(id);
  };
  return (
    <TodoContext.Provider
      value={{
        todo,
        handleTodo,
        handleTodoSubmit,
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
