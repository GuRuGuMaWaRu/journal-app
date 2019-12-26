import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AddNoteButton from "./components/layout/AddNoteButton";
import ModalForm from "./components/layout/ModalForm";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/pages/NotFound";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthRoute from "./components/routing/AuthRoute";

import AuthContext from "./context/auth/authContext";
import ModalContext from "./context/modal/modalContext";
import setAuthHeaders from "./utils/setAuthHeaders";
import "./App.css";

function App() {
  const authContext = useContext(AuthContext);
  const modalContext = useContext(ModalContext);
  const { isAuthenticated, getUser, setLoadingUser } = authContext;
  const { isOpen } = modalContext;

  useEffect(() => {
    if (localStorage.token) {
      setAuthHeaders(localStorage.token);
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
          <PrivateRoute component={Main} exact path="/" />
          <AuthRoute component={Login} path="/login" />
          <AuthRoute component={Register} path="/register" />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      {isOpen && <ModalForm />}
      {isAuthenticated && <AddNoteButton />}
    </Router>
  );
}

export default App;
