import React, { useEffect, useRef } from "react";

import { useChat } from "../context/ChatContext";
import RoomsService from "../services/rooms";

function shouldShowName(previous, message) {
  const isFirst = !previous;

  if (isFirst) {
    return true;
  }

  const differentUser = message.user_id._id !== previous.user_id._id;

  if (differentUser) {
    return true;
  }

  const timeDiff =
    new Date(message.created_at).getTime() -
    new Date(previous.created_at).getTime();
  const isMoreThan60Seconds = timeDiff > 60000;

  return isMoreThan60Seconds;
}

function Messages({ roomId }) {
  const { socket } = useChat();
  const [messages, setMessages] = React.useState([]);
  const scrollRef = useRef();

  const fetchMessages = () => {
    RoomsService.fetchMessages(roomId).then(({ data: { messages } }) => {
      setMessages(messages);
    });
  };

  useEffect(() => {
    fetchMessages();
    socket.emit("join", roomId);
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.emit("leave", roomId);
    };
  }, [roomId]);

  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <div ref={scrollRef} className="Messages">
      <div>
        {messages.length > 0 &&
          messages.map((message, index) => {
            const previous = messages[index - 1];
            const showName = shouldShowName(previous, message);

            return showName ? (
              <div key={message._id} className="Message with-avatar">
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
            ) : (
              <div key={message._id} className="Message with-avatar">
                <div className="Author">
                  <div className="MessageContent">{message.content}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Messages;
