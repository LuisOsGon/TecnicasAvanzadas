import http from "http";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { Server } from "socket.io";

import api from "./src/routes";
import connectDB from "./src/utils/db";

const PORT = process.env.PORT || 8000;

const startApp = async () => {
  const app = express();
  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: "*",
    }
  });

  await connectDB(process.env.DB_URL);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan("dev"));

  app.use("/api", api);

  io.on("connection", (socket) => {
    console.log("Usuario conectado", socket.id);
    socket.on('mensaje', (data) => {
        console.log(data);
        io.sockets.emit('mensaje', data);
    });
    socket.on('typing', (data) => {
        console.log(data);
        socket.broadcast.emit('typing', data);
    })
  });

  io.on('disconnect', (socket) => {
    console.log('a user disconnected');
  });

  io.on('error', (error) => {
    console.log(error);
  });

  server.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
  });
}

export default startApp;
