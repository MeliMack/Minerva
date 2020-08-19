// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const mainController = require('../controllers/mainController');

//RUTAS//
//RUTA HOME
router.get('/', mainController.root); /* GET - home page */
router.get('/search', mainController.search); /* GET - search results */

module.exports = router;
