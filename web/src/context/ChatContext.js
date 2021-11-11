import { useState, createContext, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

import RoomsService from "../services/rooms";

const ChatContext = createContext();
const { Provider, Consumer } = ChatContext;

function ChatProvider({ children }) {
  const { roomId } = useParams();
  const [connected, setConnected] = useState(false);
  const [rooms, setRooms] = useState([]);

  const socket = useRef();

  const connectToRoom = () => {
    socket.current = io(`http://localhost:8000`);
    socket.current.on("connect", () => {
      setConnected(true);
    });
    socket.current.on("disconnect", () => {
      setConnected(false);
    });
  };

  const fetchRooms = () => {
    RoomsService.fetchRooms()
      .then((response) => {
        const { rooms } = response.data;
        setRooms(rooms);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    if (roomId) {
      connectToRoom();
    }
  }, [roomId]);

  return (
    <Provider
      value={{
        rooms,
        fetchRooms,
        roomId,
        connectToRoom,
        connected,
        socket: socket.current
      }}
    >
      {children}
    </Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}

export { ChatProvider, Consumer as AuthConsumer, useChat };
