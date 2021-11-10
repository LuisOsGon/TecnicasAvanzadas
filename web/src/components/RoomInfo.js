import React, { useEffect } from "react";

function RoomInfo({ name, description }) {
  return (
    <div className="RoomInfo">
      <div className="Topic">
        Topico: <span className="TopicInput">{description}</span>
      </div>
      <div className="RoomName">#{name}</div>
    </div>
  );
}

export default RoomInfo;
