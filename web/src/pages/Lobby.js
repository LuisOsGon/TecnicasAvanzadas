import React, { useEffect } from "react";

import CreateRoom from "../components/CreateRoom";
import JoinRoom from "../components/JoinRoom";

function Lobby() {
  return (
    <div className="Lobby">
      <div className="LobbyRoomCreator">
        <CreateRoom />
      </div>
      <div className="LobbyRoomJoin">
        <JoinRoom />
      </div>
    </div>
  );
}

export default Lobby;
