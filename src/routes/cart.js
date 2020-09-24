// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const cartController = require('../controllers/cartController');

//RUTAS//
//RUTA CONTACT
router.get('/', cartController.root); /* GET - cart page */

//router.post('/add', cartController.add);

module.exports = router;