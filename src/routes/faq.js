// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const faqController = require('../controllers/faqController');

//RUTAS//
//RUTA ABOUT
router.get('/', faqController.root); /* GET - faq page */

module.exports = router;