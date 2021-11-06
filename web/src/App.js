import * as React from "react";
import { useAuth } from "./context/AuthContext";
import LoggedOut from "./components/LoggedOut";
import LoggedIn from "./components/LoggedIn";

import "./App.css";

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">{isAuthenticated ? <LoggedIn /> : <LoggedOut />}</div>
  );
}

export default App;
