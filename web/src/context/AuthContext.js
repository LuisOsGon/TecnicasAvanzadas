import { useState, createContext, useEffect, useContext, useMemo } from "react";
import AuthService from "../services/auth";

const AuthContext = createContext();
const { Provider, Consumer } = AuthContext;

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {};

  const logout = () => {};

  const isAuthenticated = useMemo(() => user !== null, [user]);

  useEffect(() => {
    async function fetchUser(token) {
      const { user } = await AuthService.fetchUser(token);

      setUser(user);
    }

    const token = localStorage.getItem("jwt");

    if (token) {
      fetchUser(token);
    }
  }, []);

  return <Provider value={{ isAuthenticated, user, login, logout }}>{children}</Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, Consumer as AuthConsumer, useAuth };
