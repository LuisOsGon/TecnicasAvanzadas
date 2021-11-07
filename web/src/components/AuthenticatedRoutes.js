import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Room from "../pages/Room";

import Navigation from "./Navigation";

function AuthenticatedRoutes() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/room/:roomId">
          <Room />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedRoutes;
