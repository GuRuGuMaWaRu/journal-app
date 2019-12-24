import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Journal App</h1>
      <div className="nav-items">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
        <Link to="/register" className="nav-item">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
