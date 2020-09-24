// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();


// REQUIRE CONTROLADOR//
const welcomeController = require('../controllers/welcomeController');


//MIDDLEWARE
//const sessionCheckMiddleware=require('../middleware/sessionCheck');
const verifyLoginUserMiddleware=require("../middleware/verifyLoginUser");
//RUTAS//
//router.get('/', welcomeController.root); 
router.get('/',verifyLoginUserMiddleware, welcomeController.welcome); 
module.exports = router;