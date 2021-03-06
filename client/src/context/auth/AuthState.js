import React, { useReducer } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthHeaders from "../../utils/setAuthHeaders";
import {
  REGISTER,
  LOGIN,
  LOGOUT,
  GET_USER,
  AUTH_ERROR,
  SET_LOADING_USER
} from "../types";

const AuthState = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    loadingUser: true,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user
  const register = async user => {
    try {
      const { data: token } = await axios.post("/api/user", user);

      localStorage.setItem("journal_app_token", token);
      setAuthHeaders(token);

      dispatch({ type: REGISTER, payload: user.name });
    } catch (err) {
      console.error("Error:", err.message);
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Login user
  const login = async user => {
    try {
      const {
        data: { name, token }
      } = await axios.post("/api/auth", user);

      localStorage.setItem("journal_app_token", token);
      setAuthHeaders(token);

      dispatch({ type: LOGIN, payload: name });
    } catch (err) {
      console.error("Error:", err.message);
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem("journal_app_token");
    dispatch({ type: LOGOUT });
  };

  // Get user
  const getUser = async () => {
    try {
      const {
        data: { name, token }
      } = await axios.get("/api/auth");

      localStorage.setItem("journal_app_token", token);
      setAuthHeaders(token);

      dispatch({ type: GET_USER, payload: name });
    } catch (err) {
      console.error("Error:", err.message);
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Set loading user to false
  const setLoadingUser = loadingState => {
    dispatch({ type: SET_LOADING_USER, payload: loadingState });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loadingUser: state.loadingUser,
        user: state.user,
        register,
        login,
        logout,
        getUser,
        setLoadingUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
