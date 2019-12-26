import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const AuthRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <Route {...rest}>
      {isAuthenticated ? <Component {...rest} /> : <Redirect to="/" />}
    </Route>
  );
};

export default AuthRoute;
