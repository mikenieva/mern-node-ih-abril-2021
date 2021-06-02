// 1. IMPORTACIONES
// NECESITAMOS EL MODELO PORQUE TENEMOS QUE VER LA BASE DE DATOS
const Usuario = require("./../models/Usuario")
const bcryptjs = require("bcryptjs")
const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")


// 2. CONTROLLERS
exports.iniciarSesionUsuario = async(req, res) => {

}


exports.verificarUsuario = async(req, res) => {
        res.json({
            usuario: req.usuario
        })
}


