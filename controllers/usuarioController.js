const { validationResult } = require("express-validator")


exports.crearUsuario = async (req, res) => {
        // REVISIÓN DE EXPRESS-VALIDATOR
        const errores = validationResult(req)
        
        if(!errores.isEmpty()){
            return res.json({
                errores: errores.array()
            })
        }

        // EXTRAER NOMBRE, EMAIL Y PASSWORD DEL REQ

       // DEVOLVER RESULTADO 
       res.json({
            usuario: req.body
       })
}