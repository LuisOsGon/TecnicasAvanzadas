import React from "react";
import { Switch, Route } from "react-router-dom";
import { ChatProvider } from "../context/ChatContext";

import Room from "../pages/Room";
import Navigation from "./Navigation";

function AuthenticatedRoutes() {
  return (
    <div className="App">
      <ChatProvider>
        <Navigation />
        <Switch>
          <Route path="/room/:roomId">
            <Room />
          </Route>
          <Route path="*" render={() => <h1>Bienvenido</h1>} />
        </Switch>
      </ChatProvider>
    </div>
  );
}

export default AuthenticatedRoutes;
