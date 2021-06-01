// IMPORTACIONES
const express   = require('express')
const router    = express.Router()



// RUTAS
router.get('/mike', (req,res) => {
    res.send("Hola soy mike")
})

module.exports = router