import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsersRoomsSchema = new Schema({
  idUser: { type: Number, required: false },
  idSala: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date,  default: Date.now }  
});

const UsersRooms = mongoose.model('UsersRooms', UsersRoomsSchema);

export default UsersRooms;
