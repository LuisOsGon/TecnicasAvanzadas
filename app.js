import path from "path";
import http from "http";
import express from "express";
import { Server } from "socket.io";

import api from "./server/routes";
import connectDB from "./server/utils/db";

const PORT = process.env.PORT || 8000;

const startApp = async () => {
  const app = express();
  const server = http.createServer(app);

  const io = new Server(server);

  await connectDB(process.env.DB_URL);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", api);
  app.use("*", express.static(path.join(__dirname, 'web/public')));

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

  server.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
  });
}

export default startApp;
