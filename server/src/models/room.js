import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;