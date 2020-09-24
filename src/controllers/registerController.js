//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');



const controller = {
	// Root - (RUTA EN REGISTER.JS)
	root: (req, res) => {
		res.render("register");
    },
	};

module.exports = controller;

