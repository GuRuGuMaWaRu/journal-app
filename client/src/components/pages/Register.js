import React, { useState, useContext } from "react";

import AuthContext from "../../context/auth/authContext";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const [alert, setAlert] = useState("");
  const authContext = useContext(AuthContext);
  const { register } = authContext;

  const handleChange = e => {
    if (alert.length > 0) {
      setAlert("");
    }

    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password, password2 } = values;

    if (!name || !email || !password || !password2) {
      setAlert("Please fill in all fields");
    }

    if (password !== password2) {
      setAlert("Passwords do not match");
    }

    register(values);
  };

  return (
    <div>
      <h1 className="login-title">Register User</h1>
      <form className="form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          ></input>
        </div>
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
        <div className="form-group">
          <label className="form-label" htmlFor="password2">
            Confirm Password:
          </label>
          <input
            className="form-input"
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          ></input>
        </div>
        {alert.length > 0 && <div className="form-alert">{alert}</div>}
        <button className="form-btn" type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
