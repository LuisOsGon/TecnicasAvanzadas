import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  room_id: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true,
    index: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('message', MessageSchema);

export default Message;
