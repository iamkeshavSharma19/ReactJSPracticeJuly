import React from "react";
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <CreateTodo />
      <br />
      <DisplayTodo />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default App;
