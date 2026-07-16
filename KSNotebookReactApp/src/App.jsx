import React from "react";
import CreateNotes from "./components/CreateNotes";
import DisplayNotes from "./components/DisplayNotes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <CreateNotes />
      <br />
      <DisplayNotes />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
