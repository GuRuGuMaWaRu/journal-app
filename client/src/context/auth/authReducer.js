import { REGISTER, LOGIN, LOGOUT, GET_USER, AUTH_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        loadingUser: false,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loadingUser: false,
        user: null
      };
    case GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        loadingUser: false,
        user: action.payload
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loadingUser: false,
        user: null
      };
    default:
      return state;
  }
};
