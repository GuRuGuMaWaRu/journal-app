import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/pages/NotFound";
import AuthState from "./context/auth/AuthState";
import "./App.css";

function App() {
  return (
    <AuthState>
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
    </AuthState>
  );
}

export default App;
