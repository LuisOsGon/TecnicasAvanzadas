import React from "react";

function RoomInfo() {
  return (
    <div className="RoomInfo">
      <div className="Topic">
        Topico: <input className="TopicInput" value="charlar de todo un poco" />
      </div>
      <div className="RoomName">#general</div>
    </div>
  );
}

export default RoomInfo;
