import { useState, createContext, useEffect, useContext, useMemo } from "react";

const ChatContext = createContext();
const { Provider, Consumer } = ChatContext;

function ChatProvider({ children }) {
  return <Provider value={{}}>{children}</Provider>;
}

function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}

export { ChatProvider, Consumer as AuthConsumer, useChat };
