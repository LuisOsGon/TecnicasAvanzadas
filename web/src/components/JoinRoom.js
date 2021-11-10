import React, { useState, useEffect } from "react";

import RoomsService from "../services/rooms";

function CreateRoom() {
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    RoomsService.fetchAvailableRooms().then((rooms) => {
      setAvailableRooms(rooms);
    });
  }, []);

  return (
    <div className="col-12 col-md-12">
      <div className="contenedor-div">
        <h1>Unirse a una sala</h1>
      </div>
    </div>
  );
}

export default CreateRoom;
