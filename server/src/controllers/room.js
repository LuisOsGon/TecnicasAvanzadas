import Room from '../models/room';
import Message from '../models/message';

class RoomController {
  static async list(req, res) {
    const rooms = await Room.find({ members: req.user._id });

    return res.status(200).json({rooms});
  }

  static async show(req, res) {
    const room = await Room.findById(req.params.roomId);

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    if (!room.members.includes(req.user._id)) {
      return res.status(409).json({
        message: 'You are not in this room',
      });
    }

    return res.status(200).json({room});
  }

  static async create(req, res) {
    const room = await Room.create({
      name: req.body.name,
      description: req.body.description,
      members: [req.user._id],
    });

    return res.status(201).json({room});
  }

  static async joinRoom(req, res) {
    const room = await Room.findById(req.params.roomId);

    if (!room) {
      return res.status(404).json({
        message: 'Room not found',
      });
    }

    if (room.members.includes(req.user._id)) {
      return res.status(409).json({
        message: 'You are already in this room',
      });
    }

    room.members.push(req.user._id);
    await room.save();

    return res.status(200).json({
      message: 'You have joined the room',
    });
  }

  static async leaveRoom(req, res) {
    const room = await Room.findById(req.params.roomId);

    if (!room) {
      return res.status(404).json({
        message: 'Room not found',
      });
    }

    if (!room.members.includes(req.user._id)) {
      return res.status(409).json({
        message: 'You are not in this room',
      });
    }

    room.members.pull(req.user._id);
    await room.save();

    return res.status(200).json({
      message: 'You have left the room',
    });
  }

  static async messages(req, res) {
    const room = await Room.findById(req.params.roomId)

    if (!room) {
      return res.status(404).json({
        message: 'Room not found',
      });
    }

    if (!room.members.includes(req.user._id)) {
      return res.status(409).json({
        message: 'You are not in this room',
      });
    }

    const messages = await Message.find({ room_id: req.params.roomId })
                                  .populate('user_id')
                                  .sort({ createdAt: -1 });

    return res.status(200).json({messages});
  }
}

export default RoomController;
