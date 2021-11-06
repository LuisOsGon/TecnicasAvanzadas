import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
