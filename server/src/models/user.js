import mongoose, { Collection } from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {type: Number, required: false },
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    username: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    created_at: { type: Date, default: Date.now },
    online: {type: Boolean, required:true, default:false},
    blocked: {type: Boolean, required: true, default:false}
});

const User = mongoose.model('User', UserSchema);

export default User;