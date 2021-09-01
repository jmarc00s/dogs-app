import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";

import { UserStorage } from "./context/UserContext";

import Home from "./pages/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import ProtectedRoute from "./components/helpers/ProtectedRoute";
import Photo from "./components/Photo/Photo";
import UserProfile from "./pages/user/components/UserProfile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="app-body">
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
              <Route path="/foto/:id">
                <Photo />
              </Route>
              <Route path="/perfil/:user">
                <UserProfile />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
