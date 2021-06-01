// 1. IMPORTACIONES
const express   = require('express')
const router    = express.Router()

const { check } = require("express-validator")
const authController = require('./../controllers/authController')

const auth = require('./../middleware/auth')

// INICIAR SESIÓN
// api/auth

// VERIFICAR USUARIO
// api/auth
router.get("/", auth ,(req, res) => {
    res.send("hola")
})


module.exports = router


