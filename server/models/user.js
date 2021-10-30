import mongoose from "mongoose";

import Hash from "../utils/hash";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true, max: 100},
    password: {type: String, required: true, max: 100},
    created_at: { type: Date, default: Date.now },
});

UserSchema.methods.validPassword = function(password) {
    return Hash.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
