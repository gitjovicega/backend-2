const JefeCtrl = {}
const Jefe = require('../models/Jefe.models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

JefeCtrl.crearJefe= async(req,res) => {
    const { nombre, correo, contraseña } = req.body
    const NuevoJefe = new Jefe({ 
        nombre,
        correo,
        contraseña
    })
    const correojefe = await Jefe.findOne({ correo:correo })
    if(correojefe){
        res.json({
            mensaje:'El correo ya existe'
        })
    } else {
        NuevoJefe.contraseña = await bcrypt.hash(contraseña, 10)
        const token = jwt.sign({_id:NuevoJefe._id},'Secreta')
        await NuevoJefe.save()
        res.json({
            mensaje:'Bienvenido',
            id: NuevoJefe._id,
            nombre: NuevoJefe.nombre,
            token
        })
    }

}

JefeCtrl.login = async(req,res) => {

    const { correo, contraseña } = req.body
    const jefe = await Jefe.findOne({correo:correo})
    if(!jefe) {
        return res.json({
            mensaje:'Correo y/o contraseña incorrecto'
        })
    }

    const match = await bcrypt.compare(contraseña,jefe.contraseña)

    if(match){

        const token = jwt.sign({_id: jefe._id}, 'Secreta')
        res.json({

            mensaje:'Bienvenido',
            id: jefe._id,
            nombre: jefe.nombre,
            token
        })
    }

    else{

        res.json({

            mensaje:'Contraseña y/o correo incorrecto'
        })
    }
}

module.exports = JefeCtrl