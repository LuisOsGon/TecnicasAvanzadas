import React from "react";

function ChatInputBox({ name }) {
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
        placeholder={`Mensaje #${name}`}
      />
    </form>
  );
}

export default ChatInputBox;
