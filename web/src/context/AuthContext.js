import {useState, createContext, useEffect, useContext} from 'react';
import AuthService from "../services/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {

  };

  const logout = () => {

  };

  const isAuthenticated = user !== null;

  useEffect(() => {
    async function fetchUser(token) {
      const {user} = await AuthService.fetchUser(token);
      setUser(user);
    }

    const token = localStorage.getItem('jwt');

    if (token) {
      fetchUser(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };

