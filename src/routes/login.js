// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const loginController = require('../controllers/loginController');

//RUTAS//
//RUTA ABOUT
router.get('/', loginController.root); /* GET - login page */

module.exports = router;