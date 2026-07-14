import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const todoContext = createContext();

const TodoContextProvider = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    const newTodo = {
      
    }
  };
  return (
    <todoContext.Provider
      value={{
        title,
        description,
        handleTitle,
        handleDescription,
        handleSaveTask,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
