import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h1 className="login-title">Login User</h1>
      <form className="form">
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-input" type="email" name="email"></input>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input className="form-input" type="password" name="password"></input>
        </div>
        <button className="form-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
