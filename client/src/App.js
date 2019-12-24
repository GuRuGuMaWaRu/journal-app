import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <nav>
        <span>Journal App</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

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
    </Router>
  );
}

export default App;
