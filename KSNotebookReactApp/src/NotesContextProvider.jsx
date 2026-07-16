import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const notesContext = createContext();

const NotesContextProvider = (props) => {
  //?Controlled Forms Part2
  const [formData, setFormData] = useState({
    noteTitle: "",
    noteDescription: "",
    noteTag: "",
  });
  const [allNotes, setAllNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [editId, setEditId] = useState(null);

  const handleFormInputs = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    const { noteTitle, noteDescription, noteTag } = formData;
    if (!noteTitle || !noteDescription || !noteTag) {
      toast.warning("All The input fields are Mandatory");
      return;
    }
    if (editId) {
      const notes = [...allNotes];
      const updatedNotes = notes.map((note) => {
        if (note.id === editId) {
          return {
            ...formData,
          };
        } else {
          return note;
        }
      });
      setAllNotes(updatedNotes);
      toast.success("Note Updated");
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setFormData({
        noteTitle: "",
        noteDescription: "",
        noteTag: "",
      });
      setEditId(null);
      return;
    }
    //?But what if the User has correctly entered all the Input fields ??
    const newNote = {
      id: Date.now(),
      ...formData,
    };
    //?Updating the allNotes State variable
    setAllNotes((prev) => [...prev, newNote]);
    toast.success("New Note Added");
    //?Storing the todos also inside the Local Storage
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(savedNotes));
    setFormData({
      noteTitle: "",
      noteDescription: "",
      noteTag: "",
    });
  };

  //?Deleting the Note
  const handleDeleteNote = (id) => {
    const notes = [...allNotes];
    const filteredNotes = notes.filter((note) => note.id !== id);
    setAllNotes(filteredNotes);
    toast.info("Note Deleted");
    //?Storing filteredNotes also inside the local storage
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
  };

  //~Editing The Note
  const handleEditNote = (id) => {
    const notes = [...allNotes];
    const noteToBeUpdated = notes.find((note) => note.id === id);
    setFormData({ ...noteToBeUpdated });
    setEditId(id);
  };

  const handleClearAllNotes = () => {
    setAllNotes([]);
    localStorage.clear();
    toast.success("All notes are deleted successfully");
  };

  return (
    <notesContext.Provider
      value={{
        formData,
        handleFormInputs,
        handleFormSubmit,
        allNotes,
        handleDeleteNote,
        handleEditNote,
        editId,
        handleClearAllNotes,
      }}
    >
      {props.children}
    </notesContext.Provider>
  );
};

export default NotesContextProvider;
