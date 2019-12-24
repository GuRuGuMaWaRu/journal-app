import React from "react";

const Register = () => {
  return (
    <div>
      <h1 className="login-title">Register User</h1>
      <form className="form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input className="form-input" type="text" name="name"></input>
        </div>
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
        <div className="form-group">
          <label className="form-label" htmlFor="password2">
            Confirm Password:
          </label>
          <input
            className="form-input"
            type="password"
            name="password2"
          ></input>
        </div>
        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
