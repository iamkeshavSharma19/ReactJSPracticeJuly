import { createContext, useState } from "react";

//?Step 1 ==> Creating The Context
export const TodoContext = createContext();

//?Step 2 ==> Providing The context using TodoContext.Provider
const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editId, setEditId] = useState(null);
  const handleTodos = (e) => {
    setTodo(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("It is mandatory to enter your Todos ...");
      return;
    }
    if (editId) {
      const todos = [...allTodos];
      const updatedTodos = todos.map((ele) => {
        if (ele.id === editId) {
          return {
            ...ele,
            text: todo.trim(),
          };
        } else {
          return ele;
        }
      });
      setAllTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setEditId(null);
      setTodo("");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };

    setAllTodos((prev) => [...prev, newTodo]);
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    savedTodos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(savedTodos));
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    const todos = [...allTodos];
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setAllTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const handleEditTodo = (id) => {
    const todos = [...allTodos];
    const todoToBeEdited = todos.find((todo) => todo.id === id);
    setTodo(todoToBeEdited.text);
    setEditId(id);
  };
  return (
    <TodoContext.Provider
      value={{
        todo,
        handleTodos,
        handleFormSubmit,
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
