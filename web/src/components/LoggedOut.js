import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

function LoggedOut() {
  return (
    <div className="Login">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="*" exact render={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default LoggedOut;
