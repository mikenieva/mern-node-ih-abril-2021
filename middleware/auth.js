const jwt = require("jsonwebtoken")


module.exports = (req, res, next) => {

    // RECIBIR EL TOKEN DEL FRONT (INSERTADO EN EL HEADER CON LOCALSTORAGE)
    const token = req.header('x-auth-token')
    console.log(token)
    
    // REVISAR SI NO HAY TOKEN


    // VALIDAR EL TOKEN
    res.json({
        token: token
    })

}

