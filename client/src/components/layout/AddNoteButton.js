import React, { useContext } from "react";

import NotesContext from "../../context/notes/notesContext";
import "./AddNoteButton.css";

const AddNoteButton = () => {
  const notesContext = useContext(NotesContext);
  const { openModal } = notesContext;

  return (
    <button className="add-note-btn" onClick={openModal}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddNoteButton;
