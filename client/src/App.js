import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/pages/NotFound";
import AuthContext from "./context/auth/authContext";
import setAuthHeaders from "./utils/setAuthHeaders";
import "./App.css";

function App() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadingUser, getUser } = authContext;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthHeaders(localStorage.getItem("token"));
      getUser();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
