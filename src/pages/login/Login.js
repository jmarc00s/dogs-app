import React, { useContext } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Head from "../../components/helpers/Head";
import { UserContext } from "../../context/UserContext";
import NotFound from "../NotFound";
import LoginCreate from "./components/LoginCreate";
import LoginForm from "./components/LoginForm";
import LoginPasswordLost from "./components/LoginPasswordLost";
import LoginPasswordReset from "./components/LoginPasswordReset";
import styles from "./Login.module.css";

const Login = () => {
  const { path, url } = useRouteMatch();
  const { isAuthenticated } = useContext(UserContext);
  const history = useHistory();

  React.useEffect(() => {
    if (isAuthenticated) history.push("/conta");
  }, [isAuthenticated, history]);

  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Login;
