import React, { useReducer } from "react";
import axios from "axios";

import NotesContext from "./notesContext";
import notesReducer from "./notesReducer";
import {
  GET_NOTES,
  GET_NOTE,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  FILTER_NOTES,
  ERROR
} from "../types";

const NotesState = ({ children }) => {
  const initialState = {
    notes: [],
    currentNote: {}
  };

  const [state, dispatch] = useReducer(notesReducer, initialState);

  // Get all notes
  const getNotes = () => {};

  // Get a note
  const getNote = id => {};

  // Create a note
  const createNote = async note => {
    try {
      const { data } = await axios.post("/api/note", note);
      console.log(data);
      dispatch({ type: CREATE_NOTE, payload: data });
    } catch (err) {
      console.error("Error:", err.message);
      dispatch({ type: ERROR });
    }
  };

  // Update a note
  const updateNote = note => {};

  // Delete a note
  const deleteNote = id => {};

  // Filter notes
  const filterNotes = query => {};

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        currentNote: state.currentNote,
        getNotes,
        getNote,
        createNote,
        updateNote,
        deleteNote
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesState;
