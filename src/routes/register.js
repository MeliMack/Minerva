// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const registerController = require('../controllers/registerController');
const saveRegisterController = require('../controllers/saveRegisterController');

const avatarMulter= require("../middleware/avatarMulter");

//REQUIRE FS Y PATH
const fs=require("fs");
const path=require("path");

//EXPRESS VALIDATOR
const {check, validationResult, body} =require("express-validator");

//Traigo la base de datos para porder recorrerla y validar usuarios para ver si ya esta registrado
let usuarios = fs.readFileSync( path.join(__dirname, '../data/users.json'), "utf8");
usuarios = JSON.parse(usuarios);

//RUTAS REGISTER
router.get('/', registerController.root); /* GET - register page */

router.post('/',avatarMulter.any(),[
    check('email').isEmail().withMessage("Debes ingresar un email valido"),
      //validacion custom para ver si el usuario ya esta registrado
    //body('email').custom(function(value){
    //   for(let i=0 ; i<usuarios.length; i++){
    //      if(usuarios[i].email=value){
     //           return false
    //      }
    //    };
    //    return true
    //}).withMessage("Este usuario ya se encuentra registrado"),   
    
    check("password").isLength({min:6, max:12}).withMessage("La contraseña debe tener al menos 6 caracteres")
], saveRegisterController.save); /* POST - register page */



module.exports = router;