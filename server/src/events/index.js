import User from '../models/user';
import Message from '../models/message';

function WebSocketEvents(socket) {
  try {
    console.log("Usuario conectado", socket.id);

    socket.on('message', async (data) => {
      const message = await Message.create({
        content: data.content,
        user_id: data.user_id,
        room_id: data.room_id
      });

      await Message.populate(message, { path: 'user_id', model: User });

      socket.emit('message', message);
      socket.broadcast.emit('message', message);
    });
  } catch (error) {
    console.warn(error);
  }
}

export default WebSocketEvents;
