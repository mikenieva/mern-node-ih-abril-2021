const Proyecto              = require('./../models/Proyecto')
const {validationResult}    = require('express-validator')


exports.crearProyecto = async (req,res) => {
    // REVISAR SI HAY ERRORES EN LA VALIDACIÓN DE CHECKS
    const errores = validationResult(req)
    
    if(!errores.isEmpty()){
        return res.json({
            errores: errores.array()
        })
    }

    // CREAR PROYECTO EN BASE DE DATOS
    try {
        // CREAR UN PROYECTO A PARTIR DEL MODELO
        const proyecto = new Proyecto(req.body)

        // OBTENER EL ID DEL USUARIO QUE CREÓ ESTE PROYECTO
        proyecto.creador = req.usuario.id

        // GUARDO ESTE PROYECTO  EN BASE DE DATOS
        proyecto.save()
        
        // DEVOLVER RESPUESTA
        res.json({
            mensaje: "Todo ok",
            proyectoCreado: proyecto
        })


    } catch (e){
        res.status(400).json({
            msg: "Hubo un error en servidor."
        })
    }

}




