import React from "react";
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const { user, logout } = useAuth();

  return (
    <div className="Nav">
      <div className="User">
        <img
          className="UserImage"
          alt="whatever"
          src="https://placekitten.com/64/64"
        />
        <div>
          <div>{user.email}</div>
          <div>
            <button onClick={logout} className="text-button">
              Desconectarse
            </button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav"></nav>
    </div>
  );
}

export default Navigation;
