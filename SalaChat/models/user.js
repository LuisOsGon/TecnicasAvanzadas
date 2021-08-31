var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    idUser: {type: Number, required:true, indexes: true},
    nombre: {type: String, required: true, max: 100},
    apellido: {type: String, required: true, max: 100},
    userName: {type: String, required: true, max: 100},
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);