import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    created_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

export default User;