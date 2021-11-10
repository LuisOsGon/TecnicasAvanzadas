import User from '../models/user';
import Message from '../models/message';

function WebSocketEvents(socket) {
  console.log('**************************************************************************\n\n\n')
  console.log(socket)
  console.log('\n\n\n**************************************************************************')
  console.log("Usuario conectado", socket.id);

  socket.on('message', async (data) => {
    const message = await Message.create({
      content: data.content,
      user_id: data.user_id,
      room_id: data.room_id
    });
    socket.emit('message', message);
    socket.broadcast.emit('message', message);
  });
  socket.on('typing', (data) => {
      console.log(data);
      socket.broadcast.emit('typing', data);
  })
}

export default WebSocketEvents;
