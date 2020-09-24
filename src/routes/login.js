// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const loginController = require('../controllers/loginController');


//REQUIRE FS Y PATH
const fs=require("fs");
const path=require("path");

//EXPRESS VALIDATOR
//const {check, validationResult, body} =require("express-validator");

//Traigo la base de datos para porder recorrerla y validar usuarios para ver si ya esta registrado
//let usuarios = fs.readFileSync( path.join(__dirname, '../data/users.json'), "utf8");
//usuarios = JSON.parse(usuarios);

//RUTAS//
router.get('/', loginController.login); /* GET - login page */
//router.post('/', loginController.login);
router.post('/',loginController.valid);

router.get('/', loginController.logout);


module.exports = router;