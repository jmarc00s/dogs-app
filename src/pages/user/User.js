import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "../../components/feed/Feed";
import UserHeader from "./components/UserHeader";
import UserPhotoPost from "./components/UserPhotoPost";
import UserStats from "./components/UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Switch>
        <Route exact path="/conta">
          <Feed />
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
