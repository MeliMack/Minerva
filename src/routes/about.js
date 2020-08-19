// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const aboutController = require('../controllers/aboutController');

//RUTAS//
//RUTA ABOUT
router.get('/', aboutController.root); /* GET - about page */

module.exports = router;