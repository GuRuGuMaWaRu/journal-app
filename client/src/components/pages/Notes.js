import React, { useEffect, useContext } from "react";

import Note from "./Note";
import NotesContext from "../../context/notes/notesContext";
import setAuthHeaders from "../../utils/setAuthHeaders";
import "./Notes.css";

const Notes = () => {
  const notesContext = useContext(NotesContext);
  const {
    notes,
    filteredNotes,
    filterQuery,
    loadingNotes,
    getNotes,
    getNote,
    deleteNote
  } = notesContext;

  useEffect(() => {
    if (loadingNotes) {
      setAuthHeaders(localStorage.journal_app_token);
      getNotes();
    }
    // eslint-disable-next-line
  }, [loadingNotes]);

  const handleSelectNote = id => getNote(id);
  const handleDeleteNote = id => deleteNote(id);

  if (notes.length === 0) {
    return (
      <p className="no-notes">
        Use a plus (+) button below to create some notes
      </p>
    );
  }

  if (filterQuery.length > 0) {
    return (
      <div className="notes-list">
        {filteredNotes.map(note => (
          <Note
            key={note._id}
            note={note}
            handleSelectNote={handleSelectNote}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note
          key={note._id}
          note={note}
          handleSelectNote={handleSelectNote}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};

export default Notes;
