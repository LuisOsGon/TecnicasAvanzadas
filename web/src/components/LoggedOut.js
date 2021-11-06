import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

function LoggedOut() {
  return (
    <div className="Login">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<h1>register</h1>} />
      </Routes>
    </div>
  );
}

export default LoggedOut;
