// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const registerController = require('../controllers/registerController');

const saveRegisterController = require('../controllers/saveRegisterController');

//RUTAS REGISTER
router.get('/', registerController.root); /* GET - register page */

router.post('/', saveRegisterController.save); /* POST - register page */

module.exports = router;