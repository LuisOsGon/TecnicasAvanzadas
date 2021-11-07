import React from "react";

function Messages({ roomId }) {
  const [messages, setMessages] = React.useState([]);
  return (
    <div className="Messages">
      <div className="EndOfMessages">Todos los mensajes leídos</div>
      <div>
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">06/11/2021</div>
          <div className="DayLine" />
        </div>
        <div className="Message with-avatar">
          <div className="Avatar" />
          <div className="Author">
            <div>
              <span className="UserName">Fede </span>
              <span className="TimeStamp">3:37 PM</span>
            </div>
            <div className="MessageContent">Pruebaaa</div>
          </div>
        </div>
      </div>
      <div>
        <div className="Message no-avatar">
          <div className="MessageContent">prueba</div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
