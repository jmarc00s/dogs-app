import React, { useContext } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LoginCreate from "./components/LoginCreate";
import LoginForm from "./components/LoginForm";
import LoginPasswordLost from "./components/LoginPasswordLost";
import LoginPasswordReset from "./components/LoginPasswordReset";

const Login = () => {
  const { path, url } = useRouteMatch();
  const { isAuthenticated } = useContext(UserContext);
  const history = useHistory();

  React.useEffect(() => {
    if (isAuthenticated) history.push("/conta");
  }, [isAuthenticated, history]);

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <LoginForm />
        </Route>
        <Route path={`${url}/criar`}>
          <LoginCreate />
        </Route>
        <Route path={`${url}/perdeu`}>
          <LoginPasswordLost />
        </Route>
        <Route path={`${url}/resetar`}>
          <LoginPasswordReset />
        </Route>
      </Switch>
    </div>
  );
};

export default Login;
