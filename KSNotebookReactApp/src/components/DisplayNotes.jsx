import React, { useContext } from "react";
import { notesContext } from "../NotesContextProvider";

const DisplayNotes = () => {
  const { allNotes, handleDeleteNote, handleEditNote } =
    useContext(notesContext);
  return (
    <>
      <h3 className="text-white heading3">Your Notes</h3>
      <div className="card-container">
        {allNotes.length !== 0 &&
          allNotes.map((note) => (
            <div className="card" style={{ width: "35rem" }} key={note.id}>
              <div className="card-body card-div">
                <h5 className="card-title">{note.noteTitle}</h5>
                <pre className="card-text fw-bold fs-6">
                  {note.noteDescription}
                </pre>
                <p className="card-text fw-bold">{note.noteTag}</p>
                <div className="displayBtn-container">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditNote(note.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

        {/* second card */}
      </div>
    </>
  );
};

export default DisplayNotes;
