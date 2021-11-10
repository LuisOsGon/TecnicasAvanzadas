import React from "react";
import { useParams } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useChat } from "../context/ChatContext";

function ChatInputBox({ name }) {
  const { roomId } = useParams();
  const { user } = useAuth();
  const { socket, connected } = useChat();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    socket.emit("message", {
      content: value,
      room_id: roomId,
      user_id: user._id
    });
    e.target.elements[0].value = "";
  };

  return (
    <form onSubmit={onSubmit} className="ChatInputBox">
      <input
        name="message"
        type="text"
        className="ChatInput"
        placeholder={`Mensaje #${name}`}
        disabled={!connected}
      />
    </form>
  );
}

export default ChatInputBox;
