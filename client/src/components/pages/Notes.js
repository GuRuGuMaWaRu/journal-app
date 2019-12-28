import React, { useEffect, useContext } from "react";

import Note from "./Note";
import NotesContext from "../../context/notes/notesContext";
import setAuthHeaders from "../../utils/setAuthHeaders";
import "./Notes.css";

const Notes = () => {
  const notesContext = useContext(NotesContext);
  const { notes, loadingNotes, getNotes, getNote } = notesContext;

  useEffect(() => {
    if (loadingNotes) {
      setAuthHeaders(localStorage.journal_app_token);
      getNotes();
    }
    // eslint-disable-next-line
  }, [loadingNotes]);

  const handleSelectNote = id => getNote(id);

  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note key={note._id} note={note} handleSelectNote={handleSelectNote} />
      ))}
    </div>
  );
};

export default Notes;
