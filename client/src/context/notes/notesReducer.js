import {
  GET_NOTES,
  GET_NOTE,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  FILTER_NOTES,
  OPEN_MODAL,
  CLOSE_MODAL,
  ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        loadingNotes: false,
        notes: action.payload
      };
    case GET_NOTE:
      return {
        ...state,
        currentNote: state.notes.filter(note => note._id === action.payload)[0]
      };
    case CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        modalIsOpen: false
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false
      };

    default:
      return state;
  }
};
