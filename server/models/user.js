import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    idUser: {type: Number, required:true, indexes: true},
    nombre: {type: String, required: true, max: 100},
    apellido: {type: String, required: true, max: 100},
    userName: {type: String, required: true, max: 100},
    fechaCreacion: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

export default User;