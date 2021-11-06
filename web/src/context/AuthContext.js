import { useState, createContext, useEffect, useContext, useMemo } from "react";
import AuthService from "../services/auth";

const AuthContext = createContext();
const { Provider, Consumer } = AuthContext;

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchUser(token) {
    const {
      data: { user }
    } = await AuthService.fetchUser(token);

    setUser(user);
  }

  const login = async (token) => {
    localStorage.setItem("jwt", token);

    fetchUser(token);
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
  };

  const isAuthenticated = useMemo(() => user !== null, [user]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      fetchUser(token);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, Consumer as AuthConsumer, useAuth };
