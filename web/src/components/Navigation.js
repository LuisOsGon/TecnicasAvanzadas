import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import RoomsService from "../services/rooms";

function Navigation() {
  const { user, logout } = useAuth();

  const [rooms, setRooms] = React.useState([]);

  useEffect(() => {
    RoomsService.fetchRooms()
      .then((response) => {
        const { rooms } = response.data;
        console.log(
          "**************************************************************************\n\n\n"
        );
        console.log(rooms);
        console.log(
          "\n\n\n**************************************************************************"
        );
        setRooms(rooms);
      })
      .catch((err) => console.warn(err));
  }, []);

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
      <nav className="RoomNav">
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
