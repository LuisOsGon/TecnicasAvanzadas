import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Channel from "../pages/Channel";

import Navigation from "./Navigation";

function LoggedIn() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/chat">
          <Channel />
        </Route>
        <Route path="/" exact render={() => <Redirect to="/chat" />} />
      </Switch>
    </div>
  );
}

export default LoggedIn;
