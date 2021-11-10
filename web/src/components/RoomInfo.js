import React from "react";
import { useParams, Redirect } from "react-router-dom";

import { useChat } from "../context/ChatContext";
import RoomsService from "../services/rooms";

function RoomInfo({ name, description }) {
  const { roomId } = useParams();
  const { fetchRooms } = useChat();
  const [roomLeaved, setRoomLeaved] = React.useState(false);

  const handleClick = async () => {
    try {
      await RoomsService.leaveRoom(roomId);
      setRoomLeaved(true);
      fetchRooms();
    } catch (err) {
      console.warn(err);
    }
  };

  if (roomLeaved) {
    return <Redirect to={`/lobby`} />;
  }

  return (
    <div className="RoomInfo">
      <div className="Topic">
        Topico: <span className="TopicInput">{description}</span>
      </div>
      <div className="RoomName">#{name}</div>
      <button onClick={handleClick}>Abandonar chat</button>
    </div>
  );
}

export default RoomInfo;
