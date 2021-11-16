const mongoose=require('mongoose');
const {Schema}=mongoose;

const JefeSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    correo: {type: String, required: [true, 'Corre obligatorio']},
    contraseña: {type: String, required: [true, 'Contraseña obligatorio']}

})

module.exports = mongoose.model('jefe', JefeSchema)