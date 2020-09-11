// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const loginController = require('../controllers/loginController');


//RUTAS//

router.get('/', loginController.root); /* GET - login page */

router.post('/', loginController.login);

router.get('/', loginController.welcome);
//LOG OUT
router.get('/', loginController.logout);

module.exports = router;