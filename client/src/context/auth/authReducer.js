import { REGISTER, LOGIN, LOGOUT, GET_USER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
    case LOGOUT:
    case GET_USER:
    default:
      return state;
  }
};
