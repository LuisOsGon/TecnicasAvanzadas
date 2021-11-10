import React, { useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";

function Messages({ roomId }) {
  const { socket } = useChat();
  const [messages, setMessages] = React.useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  useEffect(() => {
    // scroll to bottom
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <div ref={scrollRef} className="Messages">
      <div className="EndOfMessages">Todos los mensajes leídos</div>
      <div>
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">06/11/2021</div>
          <div className="DayLine" />
        </div>
        {messages.map((message) => (
          <div key={message._id} className="Message with-avatar">
            <div className="Avatar" />
            <div className="Author">
              <div>
                <span className="UserName">Fede </span>
                <span className="TimeStamp">
                  {new Date(message.created_at).toLocaleTimeString()}
                </span>
              </div>
              <div className="MessageContent">{message.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
