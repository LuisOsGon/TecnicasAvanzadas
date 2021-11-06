import mongoose, { Collection } from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {type: Number, required: false },
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
});

const User = mongoose.model('User', UserSchema);

export default User;
