import React from "react";
import { useParams } from "react-router-dom";
import RoomInfo from "../components/RoomInfo";
import Members from "../components/Members";
import ChatInputBox from "../components/ChatInputBox";
import Messages from "../components/Messages";

function Room() {
  const { roomId } = useParams();

  console.log(
    "**************************************************************************\n\n\n"
  );
  console.log(roomId);
  console.log(
    "\n\n\n**************************************************************************"
  );

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
