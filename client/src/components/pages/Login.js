import React, { useState, useContext } from "react";

import AuthContext from "../../context/auth/authContext";
import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [alert, setAlert] = useState("");
  const authContext = useContext(AuthContext);
  const { login } = authContext;

  const handleChange = e => {
    if (alert.length > 0) {
      setAlert("");
    }

    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = values;

    if (!email || !password) {
      setAlert("Please fill in all fields");
    }

    login(values);
  };

  return (
    <div>
      <h1 className="login-title">Login User</h1>
      <form className="form">
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          ></input>
        </div>
        {alert.length > 0 && <div className="form-alert">{alert}</div>}
        <button className="form-btn" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
