import React from "react";

function ChatInputBox() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        console.log(value);
      }}
      className="ChatInputBox"
    >
      <input
        name="message"
        type="text"
        className="ChatInput"
        placeholder="Mensaje #general"
      />
    </form>
  );
}

export default ChatInputBox;
