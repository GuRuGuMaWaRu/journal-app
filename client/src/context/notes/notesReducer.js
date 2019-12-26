import {
  GET_NOTES,
  GET_NOTE,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  FILTER_NOTES,
  ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    default:
      return state;
  }
};
