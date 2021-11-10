import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useChat } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const { user, logout } = useAuth();
  const { rooms } = useChat();

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
          <div>{user.username}</div>
          <div>
            <button onClick={logout} className="text-button">
              Desconectarse
            </button>
          </div>
        </div>
      </div>
      <nav className="RoomNav">
        <Link to="/lobby">Ir al lobby</Link>
        {rooms.length > 0
          ? rooms.map((room) => (
              <Link key={room._id} to={`/room/${room._id}`}>
                #{room.name}
              </Link>
            ))
          : null}
      </nav>
    </div>
  );
}

export default Navigation;
