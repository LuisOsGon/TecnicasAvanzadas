import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const SalaSchema = new Schema({
    idSala: {type: Number, required:true, indexes: true},
    nombre: {type: String, required: true, max: 100},    
    fechaCreacion: { type: Date, default: Date.now }
});

const Sala = mongoose.model('Sala', SalaSchema);

export default Sala;