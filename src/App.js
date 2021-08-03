import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";

import { UserStorage } from "./context/UserContext";

import Home from "./pages/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import ProtectedRoute from "./components/helpers/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/conta">
              <User />
            </ProtectedRoute>
          </Switch>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
