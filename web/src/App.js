import * as React from "react";
import { useAuth } from "./context/AuthContext";
import LoggedOut from "./components/LoggedOut";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";

import "./App.css";

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return isAuthenticated ? <AuthenticatedRoutes /> : <LoggedOut />;
}

export default App;
