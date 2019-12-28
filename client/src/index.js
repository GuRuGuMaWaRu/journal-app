import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthState from "./context/auth/AuthState";
import NotesState from "./context/notes/NotesState";
import "./index.css";

ReactDOM.render(
  <AuthState>
    <NotesState>
      <App />
    </NotesState>
  </AuthState>,
  document.getElementById("root")
);
