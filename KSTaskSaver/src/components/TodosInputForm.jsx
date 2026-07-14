import React, { useContext } from "react";
import { todoContext } from "../TodoContextProvider";

const TodosInputForm = () => {
  const { title, description, handleTitle, handleDescription, handleSaveTask } =
    useContext(todoContext);
  return (
    <>
      <div className="mb-3 mx-auto title mt-4">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-white"
        >
          Add Title
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Add Title here"
          value={title}
          required
          onChange={handleTitle}
        />
      </div>
      <div className="mb-3 mx-auto description">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label text-white"
        >
          Add Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          value={description}
          required
          onChange={handleDescription}
        />
      </div>
      {/* buttons */}
      <div className="buttons">
        <button
          type="button"
          className="btn button glitter btn-dark ml-5"
          onClick={handleSaveTask}
        >
          Save Task
        </button>
        <button type="button" className="btn button glitter btn-dark clear">
          Clear All Tasks
        </button>
      </div>
    </>
  );
};

export default TodosInputForm;
