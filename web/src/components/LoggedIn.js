import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Navigation";

function LoggedIn() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<h1>Login</h1>} />
        <Route path="/register" exact element={<h1>register</h1>} />
      </Routes>
    </>
  );
}

export default LoggedIn;
