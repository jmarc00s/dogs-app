import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import LoginCreate from "./components/LoginCreate";
import LoginForm from "./components/LoginForm";
import LoginPasswordLost from "./components/LoginPasswordLost";
import LoginPasswordReset from "./components/LoginPasswordReset";

const Login = () => {
  const { path, url } = useRouteMatch();

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
