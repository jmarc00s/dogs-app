import React from "react";
import { Route, useHistory } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

const ProtectedRoute = (props) => {
  const { isAuthenticated } = React.useContext(UserContext);
  const history = useHistory();

  if (isAuthenticated) {
    return <Route {...props}>{props.children}</Route>;
  } else {
    history.push("/login");
  }

  return null;
};

export default ProtectedRoute;
