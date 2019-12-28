import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import NotesContext from "../../context/notes/notesContext";
import "./Navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const notesContext = useContext(NotesContext);
  const { isAuthenticated, logout } = authContext;
  const { clearData } = notesContext;

  const handleLogout = () => {
    clearData();
    logout();
  };

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
      <div className="nav-item" onClick={handleLogout}>
        Logout
      </div>
    </Fragment>
  );

  return (
    <nav className="navbar">
      <div className="navbar-main">
        <h3 className="nav-title">Journal App</h3>
        <div className="nav-items">
          {!isAuthenticated ? guestLinks : userLinks}
        </div>
      </div>
      {isAuthenticated && (
        <div className="nav-search">
          <input className="nav-search-input" type="text"></input>
          <button className="nav-search-button">
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
