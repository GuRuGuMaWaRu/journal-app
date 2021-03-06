import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadingUser } = authContext;

  return (
    <Route {...rest}>
      {!isAuthenticated && !loadingUser ? (
        <Redirect to="/login" />
      ) : (
        <Component {...rest} />
      )}
    </Route>
  );
};

export default PrivateRoute;
