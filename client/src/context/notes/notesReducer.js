import {
  GET_NOTES,
  GET_NOTE,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  CLEAR_DATA,
  FILTER_NOTES,
  CLEAR_FILTERED,
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
        notes: action.payload.reverse()
      };
    case GET_NOTE:
      return {
        ...state,
        currentNote: state.notes.filter(note => note._id === action.payload)[0],
        modalIsOpen: true
      };
    case CREATE_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        filteredNotes: [action.payload, ...state.filteredNotes],
        modalIsOpen: false
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          return note._id === action.payload._id ? action.payload : note;
        }),
        filteredNotes: state.filteredNotes.map(note => {
          return note._id === action.payload._id ? action.payload : note;
        }),
        currentNote: null,
        modalIsOpen: false
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== action.payload),
        filteredNotes: state.filteredNotes.filter(
          note => note._id !== action.payload
        )
      };
    case CLEAR_DATA:
      return {
        ...state,
        notes: [],
        filterQuery: "",
        filteredNotes: [],
        currentNote: null,
        loadingNotes: true
      };
    case FILTER_NOTES:
      return {
        ...state,
        filterQuery: action.payload,
        filteredNotes: state.notes.filter(note => {
          const pattern = RegExp(`${action.payload}`, "gi");
          if (pattern.test(note.title) || pattern.test(note.body)) {
            return true;
          }
          return false;
        })
      };
    case CLEAR_FILTERED:
      return {
        ...state,
        filterQuery: "",
        filteredNotes: []
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        currentNote: null,
        modalIsOpen: false
      };
    case ERROR:
      return {
        ...state,
        currentNote: null,
        modalIsOpen: false
      };
    default:
      return state;
  }
};
