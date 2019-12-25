import React, { useReducer } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { REGISTER, LOGIN, LOGOUT, GET_USER } from "../types";

const AuthState = props => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loadingUser: true
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user
  const register = data => {
    dispatch({
      type: REGISTER
    });
  };

  // Login user
  const login = data => {
    console.log(data);
    dispatch({
      type: LOGIN
    });
  };

  // Logout user
  const logout = () => {
    dispatch({
      type: LOGOUT
    });
  };

  // Get user
  const getUser = () => {
    dispatch({
      type: GET_USER
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loadingUser: state.loadingUser,
        register,
        login,
        logout,
        getUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
