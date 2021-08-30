import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "../../components/feed/Feed";
import { UserContext } from "../../context/UserContext";
import UserHeader from "./components/UserHeader";
import UserPhotoPost from "./components/UserPhotoPost";
import UserStats from "./components/UserStats";

const User = () => {
  const { userData } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Switch>
        <Route exact path="/conta">
          <Feed user={userData.id} />
        </Route>
        <Route path="/conta/postar">
          <UserPhotoPost />
        </Route>
        <Route path="/conta/estatisticas">
          <UserStats />
        </Route>
      </Switch>
    </section>
  );
};

export default User;
