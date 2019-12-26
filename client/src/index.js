import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthState from "./context/auth/AuthState";
import ModalState from "./context/modal/ModalState";
import NotesState from "./context/notes/NotesState";
import "./index.css";

ReactDOM.render(
  <AuthState>
    <ModalState>
      <NotesState>
        <App />
      </NotesState>
    </ModalState>
  </AuthState>,
  document.getElementById("root")
);
