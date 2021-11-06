import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    id: {type: Number, required:true, indexes: true},
    idUser: {type: Number, required:true},
    idSala: {type: Number, required:true},
    texto: {type: String, required: true, max: 1000},
    visto: {type: Boolean, required: true},
    fechaCreacion: { type: Date, default: Date.now }
});

const Message = mongoose.model('message', MessageSchema);

export default Message;