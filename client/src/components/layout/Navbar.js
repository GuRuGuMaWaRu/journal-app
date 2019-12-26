import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import "./Navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const guestLinks = (
    <Fragment>
      <Link to="/login" className="nav-item">
        Login
      </Link>
      <Link to="/register" className="nav-item">
        Register
      </Link>
    </Fragment>
  );

  const userLinks = (
    <Fragment>
      <Link to="/" className="nav-item">
        Home
      </Link>
      <div className="nav-item" onClick={logout}>
        Logout
      </div>
    </Fragment>
  );

  return (
    <nav className="navbar">
      <h3 className="nav-title">Journal App</h3>
      <div className="nav-items">
        {!isAuthenticated ? guestLinks : userLinks}
      </div>
    </nav>
  );
};

export default Navbar;
