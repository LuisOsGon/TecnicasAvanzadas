import React, { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useChat } from "../context/ChatContext";
import RoomsService from "../services/rooms";

function Messages({ roomId }) {
  const { socket } = useChat();
  const [messages, setMessages] = React.useState([]);
  const scrollRef = useRef();
  const { user } = useAuth();

  const fetchMessages = () => {
    RoomsService.fetchMessages(roomId).then(({ data: { messages } }) => {
      setMessages(messages);
    });
  };

  useEffect(() => {
    fetchMessages();
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <div ref={scrollRef} className="Messages">
      <div className="EndOfMessages">
        <strong>Todos los mensajes leídos</strong>
      </div>
      <div>
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">06/11/2021</div>
          <div className="DayLine" />
        </div>
        {messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} className="Message with-avatar">
              {/* <div className="Avatar" /> */}
              <div className="Author">
                <div>
                  <span className="UserName">
                    {message.user_id.username ?? "Anónimo"}
                  </span>
                  <span className="TimeStamp">
                    {" "}
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
