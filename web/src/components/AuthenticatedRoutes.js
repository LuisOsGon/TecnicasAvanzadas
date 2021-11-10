import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Room from "../pages/Room";
import Lobby from "../pages/Lobby";
import Navigation from "./Navigation";
import { ChatProvider } from "../context/ChatContext";

function AuthenticatedRoutes() {
  return (
    <div className="App">
      <ChatProvider>
        <Navigation />
        <Switch>
          <Route path="/room/:roomId">
            <Room />
          </Route>
          <Route path="/lobby">
            <Lobby />
          </Route>
          <Route path="*" exact render={() => <Redirect to="/lobby" />} />
        </Switch>
      </ChatProvider>
    </div>
  );
}

export default AuthenticatedRoutes;
