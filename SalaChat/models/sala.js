var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SalaSchema = new Schema({
    idSala: {type: Number, required:true, indexes: true},
    nombre: {type: String, required: true, max: 100},    
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sala', SalaSchema);