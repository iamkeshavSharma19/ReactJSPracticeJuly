import React, { useContext } from "react";
import { notesContext } from "../NotesContextProvider";

const NotesInputForm = () => {
  const {
    formData,
    handleFormInputs,
    handleFormSubmit,
    editId,
    handleClearAllNotes,
  } = useContext(notesContext);

  return (
    <>
      <h3 className="mb-3 mt-4 text-white heading3">Add A Note</h3>
      <div className="mb-3 mx-auto title mt-4">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-white"
        >
          Add Note Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Add Note Title here"
          value={formData.noteTitle}
          onChange={handleFormInputs}
          name="noteTitle"
          required
        />
      </div>
      <div className="mb-3 mx-auto description">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label text-white"
        >
          Add Note Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Add Note Description"
          value={formData.noteDescription}
          onChange={handleFormInputs}
          name="noteDescription"
          required
        />
      </div>
      <div className="mb-3 mx-auto title mt-4">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-white"
        >
          Add Note Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Add a Tag for Note"
          value={formData.noteTag}
          onChange={handleFormInputs}
          name="noteTag"
          required
        />
      </div>
      {/* buttons */}
      <div className="buttons">
        <button
          type="button"
          className="btn button btn-dark ml-5"
          onClick={handleFormSubmit}
        >
          {editId ? "Update Note" : "Add Note"}
        </button>
        <button type="button" className="btn button btn-dark clear" onClick={handleClearAllNotes}>
          Clear All Notes
        </button>
      </div>
    </>
  );
};

export default NotesInputForm;
