import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomInfo from "../components/RoomInfo";
import Members from "../components/Members";
import ChatInputBox from "../components/ChatInputBox";
import Messages from "../components/Messages";

function Room() {
  const { roomId } = useParams();
  const [initialized, setInitialized] = useState(false);

  const connectToRoom = () => {
    const socket = io(`http://localhost:3001/room/${roomId}`);
    socket.on("connect", () => {
      setInitialized(true);
    });
    socket.on("message", (message) => {
      console.log(message);
    });
  };

  useEffect(() => {
    if (!initialized) {
      connectToRoom();
    }
  }, [initialized]);

  return (
    <div className="Room">
      <div className="RoomMain">
        <RoomInfo roomId={roomId} />
        <Messages roomId={roomId} />
        <ChatInputBox />
      </div>
      <Members />
    </div>
  );
}

export default Room;
