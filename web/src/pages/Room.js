import io from "socket.io-client";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import RoomInfo from "../components/RoomInfo";
import Members from "../components/Members";
import ChatInputBox from "../components/ChatInputBox";
import Messages from "../components/Messages";
import RoomsService from "../services/rooms";

function Room() {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);

  const fetchRoom = async () => {
    const {
      data: { room }
    } = await RoomsService.fetchRoom(roomId);

    setRoom(room);
  };

  const connectToRoom = () => {
    const socket = io(`http://localhost:8000`);
    socket.on("connect", () => {});
    socket.on("message", (message) => {
      console.log(message);
    });
  };

  useEffect(() => {
    setRoom(null);
    fetchRoom();
    connectToRoom();
  }, [roomId]);

  const loading = room == null;

  return (
    <div className="Room">
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <>
          <div className="RoomMain">
            <RoomInfo name={room.name} description={room.description} />
            <Messages roomId={roomId} />
            <ChatInputBox name={room.name} />
          </div>
          <Members />
        </>
      )}
    </div>
  );
}

export default Room;
