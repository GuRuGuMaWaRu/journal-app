import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthState from "./context/auth/AuthState";
import ModalState from "./context/modal/ModalState";
import "./index.css";

ReactDOM.render(
  <AuthState>
    <ModalState>
      <App />
    </ModalState>
  </AuthState>,
  document.getElementById("root")
);
