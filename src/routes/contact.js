// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const contactController = require('../controllers/contactController');

//RUTAS//
//RUTA CONTACT
router.get('/', contactController.root); /* GET - contact page */

module.exports = router;