import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AddNoteButton from "./components/layout/AddNoteButton";
import ModalForm from "./components/layout/ModalForm";
import Notes from "./components/pages/Notes";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/pages/NotFound";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthRoute from "./components/routing/AuthRoute";

import AuthContext from "./context/auth/authContext";
import NotesContext from "./context/notes/notesContext";
import setAuthHeaders from "./utils/setAuthHeaders";
import "./App.css";

function App() {
  const authContext = useContext(AuthContext);
  const notesContext = useContext(NotesContext);
  const { isAuthenticated, getUser, setLoadingUser } = authContext;
  const { modalIsOpen } = notesContext;

  useEffect(() => {
    if (localStorage.journal_app_token) {
      setAuthHeaders(localStorage.journal_app_token);
      getUser();
    } else {
      setLoadingUser(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Navbar />

      <div className="container">
        <Switch>
          <PrivateRoute component={Notes} exact path="/" />
          <AuthRoute component={Login} path="/login" />
          <AuthRoute component={Register} path="/register" />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      {modalIsOpen && <ModalForm />}
      {isAuthenticated && <AddNoteButton />}
    </Router>
  );
}

export default App;
