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
  CLEAR_FILTERED,
  CLEAR_DATA,
  OPEN_MODAL,
  CLOSE_MODAL,
  ERROR
} from "../types";

const NotesState = ({ children }) => {
  const initialState = {
    notes: [],
    filterQuery: "",
    filteredNotes: [],
    currentNote: null,
    loadingNotes: true,
    modalIsOpen: false
  };

  const [state, dispatch] = useReducer(notesReducer, initialState);

  // Get all notes
  const getNotes = async () => {
    try {
      const { data } = await axios.get("/api/note");

      dispatch({ type: GET_NOTES, payload: data });
    } catch (err) {
      console.error("Error:", err.message);
      dispatch({ type: ERROR });
    }
  };

  // Get a note
  const getNote = id => {
    dispatch({ type: GET_NOTE, payload: id });
  };

  // Create a note
  const createNote = async note => {
    try {
      const { data } = await axios.post("/api/note", note);

      dispatch({ type: CREATE_NOTE, payload: data });
    } catch (err) {
      console.error("Error:", err.message);
      dispatch({ type: ERROR });
    }
  };

  // Update a note
  const updateNote = async (note, id) => {
    try {
      const { data: updatedNote } = await axios.patch(`/api/note/${id}`, note);

      dispatch({
        type: UPDATE_NOTE,
        payload: updatedNote
      });
    } catch (err) {
      console.error("Error:", err.message);
      dispatch({ type: ERROR });
    }
  };

  // Delete a note
  const deleteNote = async id => {
    try {
      await axios.delete(`/api/note/${id}`);
      dispatch({ type: DELETE_NOTE, payload: id });
    } catch (err) {
      console.error("Error:", err.message);
      dispatch({ type: ERROR });
    }
  };

  const clearData = () => {
    dispatch({ type: CLEAR_DATA });
  };

  // Filter notes
  const filterNotes = query => {
    dispatch({ type: FILTER_NOTES, payload: query });
  };

  // Clear filtered notes
  const clearFiltered = () => {
    dispatch({ type: CLEAR_FILTERED });
  };

  // Open modal
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  // Close modal
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        filterQuery: state.filterQuery,
        filteredNotes: state.filteredNotes,
        currentNote: state.currentNote,
        loadingNotes: state.loadingNotes,
        modalIsOpen: state.modalIsOpen,
        getNotes,
        getNote,
        createNote,
        updateNote,
        deleteNote,
        clearData,
        filterNotes,
        clearFiltered,
        openModal,
        closeModal
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesState;
